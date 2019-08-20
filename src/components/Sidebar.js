import React from 'react';
import Icon from './Icon';
import cx from 'classnames';

const CLASS_NAMES = {
  SIDEBAR_WRAPPER: 'nav-side-menu',
  SIDEBAR_MENU: 'menu-list',
  SIDEBAR_MENU_ITEM: 'sidebar-menu-item',
  SIDEBAR_MENU_LOGO: 'sidebar-menu-logo',
  SIDEBAR_ACTIVE_MENU_ITEM: 'sidebar-active-menu-item',
  SIDEBAR_ICON_SIZE: 'sidebar-icon-size',
  SIDEBAR_DISABLED_MENU_ITEM: 'sidebar-disabled-item',
  SIDEBAR_SUPPORT_BUTTON: 'sidebar-support-button',
  SIDEBAR_BUTTON_NAME: 'sidebar-button-name',
  SIDEBAR_NO_ICON_IN_LIST: 'no-icon-in-list'
};

  const VatRecovery = [
    { name: 'Your Reclaims' }, { name: 'Your Invoices' }, { name: 'Optimize Recovery' }
  ];
  const EvidanceQualification = [
    { name: 'Vendor Direct'}
  ];
   const TAXTailor = [
    { icon:'molecule.svg', name: 'NMI' }, { icon:'checklist.svg', name: 'AP Audit' }, {icon:'line-chart.svg', name: 'T&E Spend Analysis'}
  ]
    
  
class Sidebar extends React.Component {
    constructor() {
      super();

    };

    render() { 
      return(
        <div class={CLASS_NAMES.SIDEBAR_WRAPPER}>
            <div class={CLASS_NAMES.SIDEBAR_MENU_LOGO}>
              <Icon icon='logo.png'/>
            </div>
          
                <div class={CLASS_NAMES.SIDEBAR_MENU}>
                    <ul>
                        <li>
                          <a href="#" className={CLASS_NAMES.SIDEBAR_ICON_SIZE}>
                          <Icon icon='menu.svg' /> VAT Recovery
                          </a>
                        </li>
                        <ul>
                          {VatRecovery.map(item => {
                            return <li className={CLASS_NAMES.SIDEBAR_NO_ICON_IN_LIST}>
                                      <a href="#" className={CLASS_NAMES.SIDEBAR_DISABLED_MENU_ITEM}>{item.name}</a>
                                   </li>;
                          })}
                        </ul>

                        <li>
                          <a href="#" className={CLASS_NAMES.SIDEBAR_ICON_SIZE}> 
                            <Icon icon='bill.svg' />
                            Evidance Qualification
                          </a>
                        </li>
                        <ul>
                          {EvidanceQualification.map(item => {
                            return <li className={CLASS_NAMES.SIDEBAR_NO_ICON_IN_LIST}>
                                      <a href="#" className={CLASS_NAMES.SIDEBAR_DISABLED_MENU_ITEM}>{item.name}</a>
                                   </li>;
                          })}
                        </ul>

                        <li>
                          <a href="#" className={CLASS_NAMES.SIDEBAR_ICON_SIZE}> <Icon icon='ruler.svg' />TAX Tailor</a>
                        </li> 
                        <ul>
                          {TAXTailor.map(item => {
                            return <li>
                                      <a href="#" class={cx(CLASS_NAMES.SIDEBAR_ICON_SIZE , CLASS_NAMES.SIDEBAR_DISABLED_MENU_ITEM)}>
                                          <Icon icon={item.icon} />
                                          {item.name}
                                      </a>
                                  </li>
                          })}
                        </ul> 

                        <li>
                          <div className={CLASS_NAMES.SIDEBAR_ACTIVE_MENU_ITEM}>
                            <a href="#" className={CLASS_NAMES.SIDEBAR_ICON_SIZE}>
                              <Icon icon='rectangle.svg'/>
                              Account Setup
                            </a>
                          </div>
                        </li>
                    </ul>
            </div>
            <button className={CLASS_NAMES.SIDEBAR_SUPPORT_BUTTON}>
                <a href="#" className={CLASS_NAMES.SIDEBAR_ICON_SIZE}>
                  <Icon icon='support.svg'/>
                  <span className={CLASS_NAMES.SIDEBAR_BUTTON_NAME}>
                    VATBox Support
                  </span>
                </a>
            </button>
        </div>
      );
    }
  }

  export default Sidebar;