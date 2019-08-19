import React from 'react';
import Icon from './Icon';

const CLASS_NAMES = {
  SIDEBAR_WRAPPER: 'nav-side-menu',
  SIDEBAR_MENU: 'menu-list',
  SIDEBAR_MENU_ITEM: 'sidebar-menu-item',
  SIDEBAR_ACTIVE_MENU_ITEM: 'sidebar-active-menu-item'
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
            <div class="brand">
              <Icon icon='logo.png'/>
            </div>
          
                <div class={CLASS_NAMES.SIDEBAR_MENU}>
                    <ul>
                        <li>
                          <a href="#" className="icon-size">
                          <Icon icon='menu.svg' /> VAT Recovery
                          </a>
                        </li>
                        <ul class="sub-menu collapse isDisabled">
                          {VatRecovery.map(item => {
                            return <li className='no-icon-list'>{item.name}</li>;
                          })}
                        </ul>

                        <li>
                          <a href="#" className='icon-size'> <Icon icon='bill.svg' />Evidance Qualification</a>
                        </li>
                        <ul class="isDisabled">
                          {EvidanceQualification.map(item => {
                            return <li className='no-icon-list'>{item.name}</li>;
                          })}
                        </ul>

                        <li>
                          <a href="#" className='icon-size'> <Icon icon='ruler.svg' />TAX Tailor</a>
                        </li> 
                        <ul class="isDisabled">
                          {TAXTailor.map(item => {
                            return <li>
                                      <span className='icon-size'>
                                        <Icon icon={item.icon} />
                                      </span>
                                      {item.name}
                                    </li>
                          })}
                        </ul> 

                        <li>
                          <div className="account-setup">
                            <a href="#" className='icon-size'><Icon icon='rectangle.svg'/>Account Setup</a>
                          </div>
                        </li>
                    </ul>
            </div>
            <button className='support-button'>
                <span className='icon-size'>
                  {/* <Icon icon='support.svg'/> */}
                </span>
                <span className="button-name">
                    VATBox Support
                </span>
            </button>
        </div>
      );
    }
  }

  export default Sidebar;