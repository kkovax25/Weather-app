import React, { Component } from 'react';
import './NavBar.scss';
import BurgerMenu from './Burger';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  toggleNavbar = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <nav className='navbar'>
        <span className='navbar-toggle' onClick={this.toggleNavbar}>
          <BurgerMenu />
        </span>
        <a href='/' className='logo'>
          Weather Forecast
        </a>
        <ul className={this.state.isActive ? 'main-nav active' : 'main-nav'}>
          <li>
            <a href='/' className='nav-links'>
              Home
            </a>
          </li>
          <li>
            <a href='/Weather-app/#/desktop' className='nav-links'>
              Desktop
            </a>
          </li>
          <li>
            <a href='http://kovacskrisztian.com/' className='nav-links'>
              About me
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
