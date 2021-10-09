import { ELEM, TAGS } from './constants.js';

class Helper {
  symbols= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  emptyElem = {
    children: [],
    classNames: [],
    styles: '',
    devClasses: [ELEM]
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getHash(len = 32) {
    let hash = '';

    for (let i = 0; i < len; i++) {
      hash += this.symbols[this.getRandomInt(0, this.symbols.length)]
    }

    return hash;
  }

  createElement(data) {
    if (!data.tag) {
      throw new Error('Tag name is required!');
    }

    if (!data.dataId) {
      data.dataId = this.getHash();
    }

    return {
      ...this.copyObj(this.emptyElem),
      ...data
    }
  }

  copyObj(obj) {
    return JSON.parse( JSON.stringify(obj) );
  }

  classFromStrToArr(str) {
    if (!str) return [];

    return str.split(' ');
  }

  classFromArrToStr(arr) {
    if (!arr || arr.length === 0) return '';

    return arr.join(' ');
  }

  getKeyByArrIncludes(value) {
    const t = TAGS;
    for (let key in t) {
      if ( t[key].includes(value) ) return key;
    }
  }

  getHtmlPath(arrPath) {
    const path = document.createElement('p');
    path.classList.add('px-1');
    path.classList.add('py-2');
    path.classList.add('m-0');

    if (!arrPath) return path;

    const arr = arrPath.map(item => {
      const {tag, classNames, dataId} = item;
      const pathItem = document.createElement('span');
      pathItem.dataset.id = dataId;
      pathItem.classList.add('__path_item');
      pathItem.innerHTML = tag;

      if (!classNames || classNames.length === 0) {
        return pathItem;
      } 
      
      const classList = this.getClassWith(classNames);
      pathItem.innerHTML = pathItem.innerHTML + classList;

      return pathItem;
    });

    arr.forEach( (item, index) => {
      path.appendChild(item);
      
      if (index !== arr.length - 1) {
        const separator = document.createElement('span');
        separator.innerHTML = '>';
        path.appendChild(separator);
      }
    } );

    return path;
  }

  getClassWith(classNames) {
    let str = '';

    classNames.forEach(cls => {
      str += `.${cls}`;
    });

    return str;
  }
}

export default Helper;