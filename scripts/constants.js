const ROOT = '__root';
const TARGET = '__target';
const ELEM = '__elem';

const TAGS = {
  block: ['div', 'p', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside'],
  inline: ['span', 'a', 'i', 'b', 's', 'u'],
  form: ['button', 'input', 'textarea', 'option', 'select', 'form'],
  list: ['li', 'ul', 'ol'],
  table: ['td', 'tr', 'th', 'thead', 'tbody', 'table'],
  other: ['img'],
}

const BC = {
  b_grid: [
    {
      value: 'b_col_12',
      text: 'col-12'
    },
    {
      value: 'b_col_9',
      text: 'col-9'
    }, 
    {
      value: 'b_col_8',
      text: 'col-8'
    }, 
    {
      value: 'b_col_6',
      text: 'col-6'
    }, 
    {
      value: 'b_col_4',
      text: 'col-4'
    }, 
    {
      value: 'b_col_3',
      text: 'col-3'
    }, 
    {
      value: 'b_row',
      text: 'row'
    }, 
    {
      value: 'b_container',
      text: 'container'
    }, 
    {
      value: 'b_container_fluid',
      text: 'container-fluid'
    }, 
  ],
  b_alert: [
    {
      value: 'b_alert_primary',
      text: 'primary'
    },
    {
      value: 'b_alert_secondary',
      text: 'secondary'
    },
    {
      value: 'b_alert_success',
      text: 'success'
    },
    {
      value: 'b_alert_danger',
      text: 'danger'
    },
    {
      value: 'b_alert_warning',
      text: 'warning'
    },
    {
      value: 'b_alert_info',
      text: 'info'
    },
    {
      value: 'b_alert_light',
      text: 'light'
    },
    {
      value: 'b_alert_dark',
      text: 'dark'
    },
  ],
  b_badge: [
    {
      value: 'b_badge_primary',
      text: 'primary'
    },
    {
      value: 'b_badge_secondary',
      text: 'secondary'
    },
    {
      value: 'b_badge_success',
      text: 'success'
    },
    {
      value: 'b_badge_danger',
      text: 'danger'
    },
    {
      value: 'b_badge_warning',
      text: 'warning'
    },
    {
      value: 'b_badge_info',
      text: 'info'
    },
    {
      value: 'b_badge_light',
      text: 'light'
    },
    {
      value: 'b_badge_dark',
      text: 'dark'
    },
  ],
  b_breadcrumb: [
    {
      value: 'b_breadcrumb',
      text: 'breadcrumb'
    }
  ],
  b_btn: [
    {
      value: 'b_btn_primary',
      text: 'primary'
    },
    {
      value: 'b_btn_secondary',
      text: 'secondary'
    },
    {
      value: 'b_btn_success',
      text: 'success'
    },
    {
      value: 'b_btn_danger',
      text: 'danger'
    },
    {
      value: 'b_btn_warning',
      text: 'warning'
    },
    {
      value: 'b_btn_info',
      text: 'info'
    },
    {
      value: 'b_btn_light',
      text: 'light'
    },
    {
      value: 'b_btn_dark',
      text: 'dark'
    },
    {
      value: 'b_btn_link',
      text: 'link'
    },
    {
      value: 'b_btn_outline_primary',
      text: 'outline primary'
    },
    {
      value: 'b_btn_outline_secondary',
      text: 'outline secondary'
    },
    {
      value: 'b_btn_outline_success',
      text: 'outline success'
    },
    {
      value: 'b_btn_outline_danger',
      text: 'outline danger'
    },
    {
      value: 'b_btn_outline_warning',
      text: 'outline warning'
    },
    {
      value: 'b_btn_outline_info',
      text: 'outline info'
    },
    {
      value: 'b_btn_outline_light',
      text: 'outline light'
    },
    {
      value: 'b_btn_outline_dark',
      text: 'outline dark'
    },
  ],
  b_btn_group: [
    {
      value: 'b_btn_group',
      text: 'group'
    },
    {
      value: 'b_btn_toolbar',
      text: 'toolbar'
    },
  ],
  b_card: [
    {
      value: 'b_card_img_top',
      text: 'image top'
    },
    {
      value: 'b_card_text',
      text: 'text'
    },
    {
      value: 'b_card_img_bg',
      text: 'image background'
    },
  ],
  b_form_control: [
    {
      value: 'b_form_control_input',
      text: 'input'
    },
    {
      value: 'b_form_control_select',
      text: 'select'
    },
    {
      value: 'b_form_control_textarea',
      text: 'textarea'
    },
    {
      value: 'b_form_control_range',
      text: 'range'
    },
  ],
  b_input_group: [
    {
      value: 'b_input_group',
      text: 'input group'
    }
  ],
  b_table: [
    {
      value: 'b_table',
      text: 'simple table'
    },
    {
      value: 'b_table_dark',
      text: 'table dark'
    },
    {
      value: 'b_table_striped',
      text: 'table striped'
    },
    {
      value: 'b_table_striped_dark',
      text: 'table striped dark'
    },
    {
      value: 'b_table_bordered',
      text: 'table bordered'
    },
    {
      value: 'b_table_borderless',
      text: 'table borderless'
    },
  ]
}

export {
  TAGS, ROOT, TARGET, ELEM, BC
};