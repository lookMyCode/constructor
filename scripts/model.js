const example = {
  dataId: '1',
  tag: 'div',
  classNames: ['test'],
  styles: '',
  devClasses: []
}


export default class Model {
  ROOT = '__root';
  TARGET = '__target';
  ELEM = '__elem';

  state = [
    {
      dataId: '__ROOT__',
      tag: 'div',
      classNames: [],
      styles: '',
      devClasses: [this.ROOT, this.TARGET, this.ELEM],
      children: []
    },
  ];

  constructor(config) {
    this.app = config.app;
  }

  getState() {
    return this.state;
  }

  showModel() {
    this.clearApp();
    
    const html = this.state.map(elem => {
      return this.getHtml(elem);
    });

    html.forEach(elem => {
      this.app.appendChild(elem);
    });
  }

  output() {
    let result = '';
    const html = this.state.map(elem => {
      return this.getPureHtml(elem);
    });

    html.forEach(elem => {
      result = elem.innerHTML;
    });

    return result;
  }

  getHtml(data) {
    let elem = document.createElement(data.tag);
    elem.dataset.id = data.dataId;

    elem = this.setClasses(elem, data.classNames);
    elem = this.setClasses(elem, data.devClasses);
    elem = this.setStyles(elem, data.styles);

    if (data.text) {
      elem.innerHTML = data.text;
    }

    if (data.type) {
      elem.type = data.type;
    }

    if (data.value) {
      elem.value = data.value;
    }

    if (data.href) {
      elem.href = data.href;
    }

    if (data.src) {
      elem.src = data.src;
    }

    if (data.colspan) {
      elem.colspan = data.colspan;
    }

    if (data.rowspan) {
      elem.rowspan = data.rowspan;
    }

    if (data.scope) {
      elem.scope = data.scope;
    }

    if (data.children && data.children.length > 0) {
      data.children.forEach(item => {
        const subElem = this.getHtml(item);
        elem.appendChild(subElem);
      });
    }
    
    return elem;
  }

  getPureHtml(data) {
    let elem = document.createElement(data.tag);

    elem = this.setClasses(elem, data.classNames);
    elem = this.setStyles(elem, data.styles);

    if (data.text) {
      elem.innerHTML = data.text;
    }

    if (data.type) {
      elem.type = data.type;
    }

    if (data.value) {
      elem.value = data.value;
    }

    if (data.href) {
      elem.href = data.href;
    }

    if (data.src) {
      elem.src = data.src;
    }

    if (data.colspan) {
      elem.colspan = data.colspan;
    }

    if (data.rowspan) {
      elem.rowspan = data.rowspan;
    }

    if (data.scope) {
      elem.scope = data.scope;
    }

    if (data.children && data.children.length > 0) {
      data.children.forEach(item => {
        const subElem = this.getPureHtml(item);
        elem.appendChild(subElem);
      });
    }
    
    return elem;
  }

  setClasses(elem, classes) {
    if (classes && classes.length > 0) {
      classes.forEach(cls => {
        elem.classList.add(cls);
      });
    }

    return elem;
  }

  setStyles(elem, styles) {
    if (styles) {
      elem.style = styles;
    }
    return elem;
  }

  clearApp() {
    this.app.innerHTML = '';
  }

  getItemByDataId(id, arr = this.state) {
    let item = null;
    
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i].dataId === id) {
        item = arr[i];
        break;
      }

      if (arr[i].children && arr[i].children.length > 0) {
        item = this.getItemByDataId(id, arr[i].children);

        if (item) {
          break;
        }
      }
    }

    return item;
  }

  clearTargetClass(arr = this.state) {
    const t = this.TARGET;

    for (let i = 0, len = arr.length; i < len; i++) {
      let dc = [...arr[i].devClasses];
      
      if ( dc.includes(t) ) {
        arr[i].devClasses = dc.filter(c => c !== t);
        break;
      } 
      
      const ic = arr[i].children;
      if (ic && ic.length > 0) {
        this.clearTargetClass(ic);
      }
    }


    this.showModel();
  }

  selectAsTarget(id) {
    this.clearTargetClass();

    const item = this.getItemByDataId(id);
    item.devClasses.push(this.TARGET);

    this.showModel();
  }

  insert(id, el) {
    const item = this.getItemByDataId(id);
    if (!item) {
      throw new Error('Item not found');
    }

    if (!item.children) {
      item.children = [];
    }

    item.children.push(el);
    this.selectAsTarget(el.dataId);
    this.showModel();
    return el;
  }

  getItemParrent(id, arr = this.state) {
    let parrent = null;

    for (let i = 0, len = arr.length; i < len; i++) {
      if ( arr[i].children && arr[i].children.length > 0 && arr[i].children.find(el => el.dataId === id) ) {
        parrent = arr[i];
        break;
      } else {
        parrent = this.getItemParrent(id, arr[i].children);
      }
    }

    return parrent;
  }

  removeItemById(id) {
    const parrent = this.getItemParrent(id);
    if (!parrent) {
      throw new Error('Parrent not found');
    }

    parrent.children = parrent.children.filter(item => item.dataId !== id);
    this.selectAsTarget(parrent.dataId);
    this.showModel();

    return parrent;
  }

  updateTag(target) {
    let parrent = this.getItemParrent(target.dataId);
    if (!parrent) throw new Error('Parrent not found');

    parrent.children = parrent.children.map(item => {
      if (item.dataId !== target.dataId) {
        return item;
      } else {
        return target;
      }
    });

    this.selectAsTarget(target.dataId);
    
    this.showModel();
  }

  getPath(item, arr = []) {
    try {
      arr.push(item);
  
      const parrent = this.getItemParrent(arr[arr.length - 1].dataId);
      
      if (parrent.dataId === '__ROOT__') {
        return arr.reverse();
      } else {
        return this.getPath(parrent, arr);
      }
    } catch (err) {
      //console.error(err);
    }
  }
}