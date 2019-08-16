import React from 'react';
import Icon from './Icon';

const CLASS_NAMES = {
  SIDEBAR_WRAPPER: 'sidebar-wrapper',
  SIDEBAR_MENU: 'sidebar-menu',
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
    { icon:'', name: 'NMI' }, { icon:'', name: 'AP Audit' }, {icon:'', name: 'T&E Spend Analysis'}
  ]
    
  


class Sidebar extends React.Component {
    constructor() {
      super();

    };
    handleSidebar() {
      this.setState({
        sideBar: !this.state.sideBar
      });
    }
    render() { 
      return(
        <div class="nav-side-menu">
            <div class="brand">Brand Logo</div>
            <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
          
                <div class="menu-list">
          
                    <ul id="menu-content" class="menu-content collapse out">
                        <li>
                          <a href="#">
                          <i class="fa fa-dashboard fa-lg"></i> VAT Recovery
                          </a>
                        </li>
                        <ul class="sub-menu collapse">
                          {VatRecovery.map(item => {
                            return <li>{item.name}</li>;
                          })}
                        </ul>

                        <li  data-toggle="collapse" data-target="#products" class="collapsed active">
                          <a href="#"><i class="fa fa-gift fa-lg"></i>  Evidance Qualification  <span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse">
                          {EvidanceQualification.map(item => {
                            return <li>{item.name}</li>;
                          })}
                        </ul>

                        <li data-toggle="collapse" data-target="#service" class="collapsed">
                          <a href="#"><i class="fa fa-globe fa-lg"></i> TAX Tailor <span class="arrow"></span></a>
                        </li> 
                        <ul class="sub-menu collapse">
                          {TAXTailor.map(item => {
                            return <li>{item.name}</li>;
                          })}
                        </ul> 

                        <li data-toggle="collapse" data-target="#new" class="collapsed">
                          <a href="#"><i class="fa fa-car fa-lg"></i> Account Setup <span class="arrow"></span></a>
                        </li>
                    </ul>
            </div>
        </div>
      );
    }
  }

  export default Sidebar;