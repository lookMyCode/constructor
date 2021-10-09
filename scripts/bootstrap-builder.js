import Helper from './helper.js';

export default class BootstrapBuilder {
  helper = new Helper();
  lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quaerat blanditiis sit obcaecati autem adipisci, quis quod impedit iste deserunt? Illum, quos reprehenderit aliquam unde est aperiam at non voluptatum.';

  create(config) {
    if (!config.name) throw new Error('Name is required');

    switch (config.name) {
      case 'b_col_12':
        return this.createCol12(config.additionalClasses);

      case 'b_col_9':
        return this.createCol9(config.additionalClasses);

      case 'b_col_8':
      return this.createCol8(config.additionalClasses);

      case 'b_col_6':
      return this.createCol6(config.additionalClasses);

      case 'b_col_4':
      return this.createCol4(config.additionalClasses);

      case 'b_col_3':
      return this.createCol3(config.additionalClasses);

      case 'b_row':
        return this.createRow(config.additionalClasses);

      case 'b_container':
        return this.createContainer(config.additionalClasses);

      case 'b_container_fluid':
        return this.createContainerFluid(config.additionalClasses);


      case 'b_alert_primary':
        return this.createAlert(['alert-primary', ...config.additionalClasses]);

      case 'b_alert_secondary':
        return this.createAlert(['alert-secondary', ...config.additionalClasses]);

      case 'b_alert_success':
        return this.createAlert(['alert-success', ...config.additionalClasses]);

      case 'b_alert_danger':
        return this.createAlert(['alert-danger', ...config.additionalClasses]);

      case 'b_alert_warning':
        return this.createAlert(['alert-warning', ...config.additionalClasses]);

      case 'b_alert_info':
        return this.createAlert(['alert-info', ...config.additionalClasses]);

      case 'b_alert_light':
        return this.createAlert(['alert-light', ...config.additionalClasses]);

      case 'b_alert_dark':
        return this.createAlert(['alert-dark', ...config.additionalClasses]);


      case 'b_badge_primary':
        return this.createBadge(['badge-primary', ...config.additionalClasses]);

      case 'b_badge_secondary':
        return this.createBadge(['badge-secondary', ...config.additionalClasses]);

      case 'b_badge_success':
        return this.createBadge(['badge-success', ...config.additionalClasses]);

      case 'b_badge_danger':
        return this.createBadge(['badge-danger', ...config.additionalClasses]);

      case 'b_badge_warning':
        return this.createBadge(['badge-warning', ...config.additionalClasses]);

      case 'b_badge_info':
        return this.createBadge(['badge-info', ...config.additionalClasses]);

      case 'b_badge_light':
        return this.createBadge(['badge-light', ...config.additionalClasses]);

      case 'b_badge_dark':
        return this.createBadge(['badge-dark', ...config.additionalClasses]);


      case 'b_btn_primary':
        return this.createBtn(['btn-primary', ...config.additionalClasses]);

      case 'b_btn_secondary':
        return this.createBtn(['btn-secondary', ...config.additionalClasses]);

      case 'b_btn_success':
        return this.createBtn(['btn-success', ...config.additionalClasses]);

      case 'b_btn_danger':
        return this.createBtn(['btn-danger', ...config.additionalClasses]);

      case 'b_btn_warning':
        return this.createBtn(['btn-warning', ...config.additionalClasses]);

      case 'b_btn_info':
        return this.createBtn(['btn-info', ...config.additionalClasses]);

      case 'b_btn_light':
        return this.createBtn(['btn-light', ...config.additionalClasses]);

      case 'b_btn_dark':
        return this.createBtn(['btn-dark', ...config.additionalClasses]);

      case 'b_btn_link':
        return this.createBtn(['btn-link', ...config.additionalClasses]);

        case 'b_btn_outline_primary':
        return this.createBtn(['btn-outline-primary', ...config.additionalClasses]);

      case 'b_btn_outline_secondary':
        return this.createBtn(['btn-outline-secondary', ...config.additionalClasses]);

      case 'b_btn_outline_success':
        return this.createBtn(['btn-outline-success', ...config.additionalClasses]);

      case 'b_btn_outline_danger':
        return this.createBtn(['btn-outline-danger', ...config.additionalClasses]);

      case 'b_btn_outline_warning':
        return this.createBtn(['btn-outline-warning', ...config.additionalClasses]);

      case 'b_btn_outline_info':
        return this.createBtn(['btn-outline-info', ...config.additionalClasses]);

      case 'b_btn_outline_light':
        return this.createBtn(['btn-outline-light', ...config.additionalClasses]);

      case 'b_btn_outline_dark':
        return this.createBtn(['btn-outline-dark', ...config.additionalClasses]);


      case 'b_btn_group':
        return this.createBtnGroup(config.additionalClasses);

      case 'b_btn_toolbar':
        return this.createBtnToolbar(config.additionalClasses);


      case 'b_breadcrumb':
        return this.createBreadcrumb(config.additionalClasses);


      case 'b_card_img_top':
        return this.createCardImgTop(config.additionalClasses);

      case 'b_card_text':
        return this.createCardText(config.additionalClasses);

      case 'b_card_img_bg':
        return this.createCardImgBg(config.additionalClasses);


      case 'b_form_control_input':
        return this.createFCInput(config.additionalClasses);

      case 'b_form_control_select':
        return this.createFCSelect(config.additionalClasses);

      case 'b_form_control_textarea':
        return this.createFCTextarea(config.additionalClasses);

      case 'b_form_control_range':
        return this.createFCRange(config.additionalClasses);


      case 'b_input_group':
        return this.createInputGroup(config.additionalClasses);


      case 'b_table':
        return this.createTable(config.additionalClasses);

      case 'b_table_dark': 
        return this.createTable(['table-dark', ...config.additionalClasses]);

      case 'b_table_striped':
        return this.createTable(['table-striped', ...config.additionalClasses]);

      case 'b_table_striped_dark':
        return this.createTable(['table-striped', 'table-dark', ...config.additionalClasses]);

      case 'b_table_bordered':
        return this.createTable(['table-bordered', ...config.additionalClasses]);

      case 'b_table_borderless':
        return this.createTable(['table-borderless', ...config.additionalClasses]);

      
      default:
        throw new Error('Unknown component name');
    }
  }

  createCol12(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['col-12', ...classNames]
    });
  }

  createCol9(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['col-9', ...classNames]
    });
  }

  createCol8(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['col-8', ...classNames]
    });
  }

  createCol6(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['col-6', ...classNames]
    });
  }

  createCol4(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['col-4', ...classNames]
    });
  }

  createCol3(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['col-3', ...classNames]
    });
  }

  createRow(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['row', ...classNames]
    });
  }

  createContainer(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['container', ...classNames]
    });
  }

  createContainerFluid(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['container-fluid', ...classNames]
    });
  }

  createAlert(classNames) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['alert', ...classNames],
      text: this.lorem
    });
  }

  createBadge(classNames) {
    return this.helper.createElement({
      tag: 'span',
      classNames: ['badge', ...classNames],
      text: 'Lorem'
    });
  }

  createBreadcrumb(classNames) {
    const nav = this.helper.createElement({
      tag: 'nav',
      classNames
    });

    const ol = this.helper.createElement({
      tag: 'ol',
      classNames: ['breadcrumb']
    });

    const li1 = this.helper.createElement({
      tag: 'li',
      classNames: ['breadcrumb-item']
    });

    const li2 = this.helper.createElement({
      tag: 'li',
      classNames: ['breadcrumb-item']
    });

    const li3 = this.helper.createElement({
      tag: 'li',
      classNames: ['breadcrumb-item', 'active'],
      text: 'Lorem'
    });

    const a1 = this.createA('Lorem');
    const a2 = this.createA('Lorem');

    li1.children.push(a1);
    li2.children.push(a2);

    ol.children.push(li1, li2, li3);

    nav.children.push(ol);

    return nav;
  }

  createA(text) {
    return this.helper.createElement({
      tag: 'a',
      classNames: [],
      text,
      href: '#'
    });
  }

  createBtn(classNames, text = 'Lorem') {
    return this.helper.createElement({
      tag: 'button',
      classNames: ['btn', ...classNames],
      text
    });
  }

  createBtnGroup(classNames) {
    const div = this.helper.createElement({
      tag: 'div',
      classNames: ['btn-group', ...classNames]
    });

    div.children = [
      this.createBtn(['btn-primary']),
      this.createBtn(['btn-success']),
      this.createBtn(['btn-danger']),
    ];

    return div;
  }

  createBtnToolbar(classNames) {
    const toolbar = this.helper.createElement({
      tag: 'div',
      classNames: ['btn-toolbar', ...classNames]
    });

    const btnGroup1 = this.helper.createElement({
      tag: 'div',
      classNames: ['btn-group', 'mr-2'],
      children: [
        this.createBtn(['btn-secondary'], 1),
        this.createBtn(['btn-secondary'], 2),
        this.createBtn(['btn-secondary'], 3),
      ]
    });

    const btnGroup2 = this.helper.createElement({
      tag: 'div',
      classNames: ['btn-group', 'mr-2'],
      children: [
        this.createBtn(['btn-primary'], 4),
        this.createBtn(['btn-primary'], 5),
      ]
    });

    const btnGroup3 = this.helper.createElement({
      tag: 'div',
      classNames: ['btn-group'],
      children: [
        this.createBtn(['btn-success'], 6),
      ]
    });

    toolbar.children.push(btnGroup1, btnGroup2, btnGroup3);

    return toolbar;
  }

  createCardImgTop(classNames = []) {
    const card = this.createCard(classNames);
    const cardImg = this.createImg(['card-img-top'], 'http://via.placeholder.com/200x100');
    const cardBody = this.createCardBody();

    cardBody.children = [
      this.helper.createElement({
        tag: 'h5',
        classNames: ['card-title'],
        text: 'Lorem ipsum'
      }),
      this.helper.createElement({
        tag: 'h6',
        classNames: ['card-subtitle', 'mb-2', 'text-muted'],
        text: 'Lorem ipsum'
      }),
      this.helper.createElement({
        tag: 'p',
        classNames: ['card-text'],
        text: this.lorem
      }),
      this.createBtn(['btn-primary'])
    ];

    card.children.push(cardImg, cardBody);

    return card;
  }

  createCardText(classNames = []) {
    const card = this.createCard(classNames);
    const cardBody = this.createCardBody();

    cardBody.children = [
      this.helper.createElement({
        tag: 'h5',
        classNames: ['card-title'],
        text: 'Lorem ipsum'
      }),
      this.helper.createElement({
        tag: 'h6',
        classNames: ['card-subtitle', 'mb-2', 'text-muted'],
        text: 'Lorem ipsum'
      }),
      this.helper.createElement({
        tag: 'p',
        classNames: ['card-text'],
        text: this.lorem
      }),
      this.helper.createElement({
        tag: 'a',
        href: '#',
        classNames: ['card-link'],
        text: 'Lorem'
      }),
      this.helper.createElement({
        tag: 'a',
        href: '#',
        classNames: ['card-link'],
        text: 'Lorem'
      }),
    ];

    card.children.push(cardBody);

    return card;
  }

  createCardImgBg(classNames = []) {
    const card = this.createCard(['bg-dark', 'text-white', ...classNames]);
    const img = this.createImg(['card-img'], 'https://images.pexels.com/photos/6391020/pexels-photo-6391020.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');

    const cardBody = this.helper.createElement({
      tag: 'div',
      classNames: ['card-img-overlay'],
      children: [
        this.helper.createElement({
          tag: 'h5',
          classNames: ['card-title'],
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'p',
          classNames: ['card-text'],
          text: this.lorem
        })
      ]
    });

    card.children.push(img, cardBody);

    return card;
  }

  createCard(classNames = []) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['card', ...classNames],
    });
  }

  createImg(classNames = [], src = 'http://placeholder.com/200x100') {
    return this.helper.createElement({
      tag: 'img',
      classNames,
      src
    });
  }

  createCardBody(classNames = []) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['card-body', ...classNames]
    });
  }

  createFCInput(classNames = []) {
    const formGroup = this.createFormGroup(classNames);
    const label = this.createDefaultLabel();
    const input = this.createInput(['form-control']);

    formGroup.children.push(label, input);

    return formGroup;
  }

  createFCSelect(classNames = []) {
    const formGroup = this.createFormGroup(classNames);
    const label = this.createDefaultLabel();

    const select = this.helper.createElement({
      tag: 'select',
      classNames: ['form-control'],
      children: [
        this.helper.createElement({
          tag: 'option',
          value: '1',
          text: '1'
        }),
        this.helper.createElement({
          tag: 'option',
          value: '2',
          text: '2'
        }),
      ]
    });

    formGroup.children.push(label, select);

    return formGroup;
  }

  createFCTextarea(classNames = []) {
    const formGroup = this.createFormGroup(classNames);
    const label = this.createDefaultLabel();
    const textarea = this.helper.createElement({
      tag: 'textarea',
      classNames: ['form-control']
    });

    formGroup.children.push(label, textarea);

    return formGroup;
  }

  createFCRange(classNames = []) {
    const formGroup = this.createFormGroup(classNames);
    const label = this.createDefaultLabel();
    const input = this.createInput(['form-control-range'], 'range');

    formGroup.children.push(label, input);

    return formGroup;
  }

  createFormGroup(classNames = []) {
    return this.helper.createElement({
      tag: 'div',
      classNames: ['form-group', ...classNames],
      children: []
    });
  }

  createDefaultLabel(classNames = []) {
    return this.helper.createElement({
      tag: 'label',
      text: 'Lorem',
      classNames
    });
  }

  createInput(classNames = [], type = 'text') {
    return this.helper.createElement({
      tag: 'input',
      type,
      classNames
    });
  }

  createInputGroup(classNames = []) {
    const inputGroup = this.helper.createElement({
      tag: 'div',
      classNames: ['input-group', ...classNames]
    });
    const input = this.createInput(['form-control']);
    const append = this.helper.createElement({
      tag: 'div',
      classNames: ['input-group-append'],
      children: [
        this.createBtn(['btn-outline-secondary'])
      ]
    });

    inputGroup.children.push(input, append);

    return inputGroup;
  }

  createTable(classNames = []) {
    const wrap = this.helper.createElement({
      tag: 'div',
      classNames: ['table-responsive']
    });

    const table = this.helper.createElement({
      tag: 'table',
      classNames: ['table', ...classNames]
    });

    const thead = this.helper.createElement({tag: 'thead'});
    const tbody = this.helper.createElement({tag: 'tbody'});

    const tr1 = this.helper.createElement({
      tag: 'tr',
      children: [
        this.helper.createElement({
          tag: 'th',
          scope: 'col',
          text: '#'
        }),
        this.helper.createElement({
          tag: 'th',
          scope: 'col',
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'th',
          scope: 'col',
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'th',
          scope: 'col',
          text: 'Lorem'
        }),
      ]
    });

    thead.children.push(tr1);

    const tr2 = this.helper.createElement({
      tag: 'tr',
      children: [
        this.helper.createElement({
          tag: 'th',
          scope: 'row',
          text: '1'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
      ]
    });

    const tr3 = this.helper.createElement({
      tag: 'tr',
      children: [
        this.helper.createElement({
          tag: 'th',
          scope: 'row',
          text: '2'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
      ]
    });

    const tr4 = this.helper.createElement({
      tag: 'tr',
      children: [
        this.helper.createElement({
          tag: 'th',
          scope: 'row',
          text: '3'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
        this.helper.createElement({
          tag: 'td',
          text: 'Lorem'
        }),
      ]
    });

    tbody.children.push(tr2, tr3, tr4);
    
    table.children.push(thead, tbody);
    wrap.children.push(table);

    return wrap;
  }
}