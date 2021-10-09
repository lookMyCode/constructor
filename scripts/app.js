import Model from './model.js';
import { TAGS, BC } from './constants.js';
import Helper from './helper.js';
import BootstrapBuilder from './bootstrap-builder.js';

window.addEventListener('load', () => {
  // Стартовая цель
  let targetObj = { 
    dataId: '__ROOT__'
  };

  const app = document.getElementById('app');
  const model = new Model({app});
  const helper = new Helper();
  const bootstrapBuilder = new BootstrapBuilder();

  // Текстовые поля для добавления тега
  const addTag = {
    tag: document.getElementById('tag'),
    class: document.getElementById('add_tag_class'),
    text: document.getElementById('add_tag_text'),
    styles: document.getElementById('add_tag_styles'),
    type: document.getElementById('add_tag_type'),
    value: document.getElementById('add_tag_value'),
    href: document.getElementById('add_tag_href'),
    src: document.getElementById('add_tag_src'),
    colspan: document.getElementById('add_tag_colspan'),
    rowspan: document.getElementById('add_tag_rowspan'),
    scope: document.getElementById('add_tag_scope')
  }

  // Текстовые поля для изменения тега
  const editTag = {
    tag: document.getElementById('edit_tag'),
    class: document.getElementById('edit_tag_class'),
    text: document.getElementById('edit_tag_text'),
    styles: document.getElementById('edit_tag_styles'),
    type: document.getElementById('edit_tag_type'),
    value: document.getElementById('edit_tag_value'),
    href: document.getElementById('edit_tag_href'),
    src: document.getElementById('edit_tag_src'),
    colspan: document.getElementById('edit_tag_colspan'),
    rowspan: document.getElementById('edit_tag_rowspan'),
    scope: document.getElementById('edit_tag_scope')
  }

  const bootstrapComponents = {
    bComponent: document.getElementById('b_component'),
    bAdditionalClass: document.getElementById('b_additional_class'),
  }

  // Получение корректной стартовой цели
  setTarget( model.getItemByDataId(targetObj.dataId) );
  // Отображение модели
  model.showModel();
  // Отображение на панели елементов управления
  selectTagGroup();
  selectTagGroupForEdit();
  selectBGroup();

  // Получение цели при клике на елемент
  document.body.addEventListener('click', (e) => {
    // Проверка или крик был на панель
    // const panel = e.target.closest('#panel');
    // if (panel) {
    //   e.preventDefault();
    //   return;
    // }

    // Проверка или клик произошел по разрешенному елементу
    const elem = e.target.closest(`.${model.ELEM}`) || e.target.closest('.__path_item');

    if (elem) {
      // Если да сохраняем новую цель
      const targetId = elem.dataset.id;
      model.selectAsTarget(targetId);
      setTarget( model.getItemByDataId(targetId) );
    }
  });

  document.getElementById('parrent_btn').addEventListener('click', () => {
    try {
      const parrent = model.getItemParrent(targetObj.dataId);

      if (!parrent) return;

      model.selectAsTarget(parrent.dataId);
      setTarget(parrent);
    } catch (err) {}
  });

  document.getElementById('output_btn').addEventListener('click', () => {
    const code = model.output();
    alert(code);
  });

  // Следим за изменением групы тегов
  document.getElementById('tag_group').addEventListener('change', ({target}) => {
    selectTagGroup(target.value);
  });
  
  // Следим за изменением групы тегов
  document.getElementById('edit_tag_group').addEventListener('change', ({target}) => {
    selectTagGroupForEdit(target.value);
  });

  document.getElementById('b_group').addEventListener('change', ({target}) => {
    selectBGroup(target.value);
  });

  // Добавление елемента в модель
  document.getElementById('add_tag_btn').addEventListener('click', addToModel);
  addTagOnEnter();

  // Добавление елемента в модель
  document.getElementById('edit_tag_btn').addEventListener('click', editTagInModel);
  editTagOnEnter();

  // Добавление компонента в модель
  document.getElementById('add_bc_btn').addEventListener('click', addBCToModel);
  addBCToModelOnEnter();

  // Удаление елемента из модели
  document.getElementById('remove_tag_btn').addEventListener('click', () => {
    // Проверка или не удаляем корневой елемент, это запрещено
    if (targetObj.dataId === '__ROOT__') {
      alert('Can\'t remove root tag');
      return;
    }

    // Удаляем елемент и получаем новую цель
    const newTarget = model.removeItemById(targetObj.dataId);
    if (!newTarget) {
      alert('Error');
      throw new Error('Parrent not found');
    }

    // Сохраняем новую цель
    setTarget(newTarget);
  });

  // Список тегов в зависимости от группы тегов
  function selectTagGroup(tagGroup = 'block') {
    const tags = TAGS[tagGroup];
    const tagSelect = document.getElementById('tag');

    tagSelect.innerHTML = '';
    tags.forEach(el => {
      const option = document.createElement('option');
      option.value = el;
      option.innerHTML = el;
      tagSelect.appendChild(option);
    });
  }

  // Список тегов в зависимости от группы тегов
  function selectTagGroupForEdit(tagGroup = 'block') {
    const tags = TAGS[tagGroup];
    const tagSelect = document.getElementById('edit_tag');

    tagSelect.innerHTML = '';
    tags.forEach(el => {
      const option = document.createElement('option');
      option.value = el;
      option.innerHTML = el;
      tagSelect.appendChild(option);
    });
  }

  function selectBGroup(bGroup = 'b_grid') {
    const components = BC[bGroup];
    const compSelect = document.getElementById('b_component');

    compSelect.innerHTML = '';
    components.forEach(el => {
      const option = document.createElement('option');
      option.value = el.value;
      option.innerHTML = el.text;
      compSelect.appendChild(option);
    });
  }

  function formReset(obj) {
    for (let key in obj) {
      obj[key].value = '';
    }
  }

  // Добавление в модель тега
  function addToModel() {
    const tagName = addTag.tag.value;
    const classString = addTag.class.value;
    const text = addTag.text.value;
    const styles = addTag.styles.value;
    const type = addTag.type.value;
    const value = addTag.value.value;
    const href = addTag.href.value;
    const src = addTag.src.value;
    const colspan = addTag.colspan.value;
    const rowspan = addTag.rowspan.value;
    const scope = addTag.scope.value;

    // Трансформация классов в массив
    const classNames = helper.classFromStrToArr(classString);
    
    // Создание обьекта елемента
    const elem = helper.createElement({
      tag: tagName,
      classNames,
      styles: styles ? styles : '',
      text: text ? text : '',
      type: type ? type : '',
      value: value ? value : '',
      href: href ? href : '',
      src: src ? src : '',
      text: text ? text : '',
      colspan: colspan ? colspan : '',
      rowspan: rowspan ? rowspan : '',
      scope: scope ? scope : '',
    });
    
    // Добавление обьекта елемента в модель
    const newTarget = model.insert(targetObj.dataId, elem);

    // Сброс формы
    formReset(addTag);

    // Сохранение новой цели
    setTarget(newTarget);
  }

  function editTagInModel () {
    const tagName = editTag.tag.value;
    const classString = editTag.class.value;
    const text = editTag.text.value;
    const styles = editTag.styles.value;
    const type = editTag.type.value;
    const value = editTag.value.value;
    const href = editTag.href.value;
    const src = editTag.src.value;
    const colspan = editTag.colspan.value;
    const rowspan = editTag.rowspan.value;
    const scope = editTag.scope.value;

    // Трансформация классов в массив
    const classNames = helper.classFromStrToArr(classString);
    
    // Создание обьекта елемента
    const elem = helper.createElement({
      tag: tagName,
      classNames,
      styles: styles ? styles : '',
      text: text ? text : '',
      type: type ? type : '',
      value: value ? value : '',
      href: href ? href : '',
      src: src ? src : '',
      text: text ? text : '',
      colspan: colspan ? colspan : '',
      rowspan: rowspan ? rowspan : '',
      scope: scope ? scope : '',
    });

    elem.dataId = targetObj.dataId;
    model.updateTag(elem);
    setTarget(elem);
  }

  function addBCToModel() {
    const componentName = bootstrapComponents.bComponent.value;
    const additionalClassString = bootstrapComponents.bAdditionalClass.value;

    // Трансформация классов в массив
    const additionalClassNames = helper.classFromStrToArr(additionalClassString);

    const elem = bootstrapBuilder.create({
      name: componentName,
      additionalClasses: additionalClassNames
    });

    // Добавление обьекта елемента в модель
    const newTarget = model.insert(targetObj.dataId, elem);

    // Сброс формы
    formReset(bootstrapComponents);

    // Сохранение новой цели
    setTarget(newTarget);
  }

  function addTagOnEnter() {
    for (let key in addTag) {
      addTag[key].addEventListener('keydown', (e) => {
        if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode == 13) {
          addToModel();
        }
      });
    }
  }

  function editTagOnEnter () {
    for (let key in editTag) {
      editTag[key].addEventListener('keydown', (e) => {
        if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode == 13) {
          editTagInModel();
        }
      });
    }
  }

  function addBCToModelOnEnter() {
    for (let key in bootstrapComponents) {
      bootstrapComponents[key].addEventListener('keydown', (e) => {
        if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode == 13) {
          addBCToModel();
        }
      });
    }
  }

  function setTarget(newTarget) {
    targetObj = newTarget;
    setEditForm();
    setPath();
  }

  function setPath() {
    const arrPath = model.getPath(targetObj);
    const path = helper.getHtmlPath(arrPath);
    const pathWrap = document.getElementById('path_wrap');

    pathWrap.innerHTML = '';
    pathWrap.appendChild(path);
  }

  function setEditForm() {
    const tagGroup = helper.getKeyByArrIncludes(targetObj.tag);

    document.getElementById('edit_tag_group').value = tagGroup;
    selectTagGroupForEdit(tagGroup);

    editTag.tag.value = targetObj.tag;
    editTag.class.value = helper.classFromArrToStr(targetObj.classNames);
    editTag.text.value = targetObj.text || '';
    editTag.styles.value = targetObj.styles || '';
    editTag.type.value = targetObj.type || '';
    editTag.value.value = targetObj.value || '';
    editTag.href.value = targetObj.href || '';
    editTag.src.value = targetObj.src || '';
    editTag.colspan.value = targetObj.colspan || '';
    editTag.rowspan.value = targetObj.rowspan || '';
    editTag.scope.value = targetObj.scope || '';
  }
});