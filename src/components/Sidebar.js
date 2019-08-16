import React from 'react';


class Sidebar extends React.Component {
    constructor() {
      super();
      this.state = {
        isSideBar: false
      }
    };
    handleSidebar() {
      this.setState({
        sideBar: !this.state.sideBar
      });
    }
    render() { 
      return(
        <header className="header">
          <div className="navContainer">
            <span className="logo">Logo</span>
            <nav>
              <ul className="mainNav" style={this.state.sideBar ? {'transform': 'translateX(0%)'} : null}>
                <li><a className="mainNavLink" href='#'>Some link</a></li>
                <li><a className="mainNavLink" href='#'>Some link</a></li>
                <li><a className="mainNavLink" href='#'>Some link</a></li>
              </ul>
            </nav>
            <button onClick={this.handleSidebar.bind(this)} className={`navToggle ${(this.state.sideBar ? 'open' : '')}`}>
                <span></span>
                <span></span>
                <span></span>
              </button>
          </div>
          <div onClick={this.handleSidebar.bind(this)} className={`overlay ${(this.state.sideBar ? 'open' : '')}`}></div>
        </header>
      );
    }
  }

  export default Sidebar;