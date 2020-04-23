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
          <BurgerMenu/>
          {/* <div className={this.state.isActive ? 'nav-icon active' : 'nav-icon disabled'}>
            <div></div>
          </div> */}
          {/* <div className={this.state.isActive ? 'line1__active1' : 'line1'}></div>
         <div className={this.state.isActive ? 'line2__active2' : 'line2'}></div>
         <div className={this.state.isActive ? 'line3__active3' : 'line3'}></div> */}
        </span>
        <a href='#profile' className='logo'>
          Weather Forecast
        </a>
        <ul
          className={this.state.isActive ? 'main-nav active' : 'main-nav'}
          id='js-menu'
        >
          <li>
            <a href='#profile' className='nav-links'>
              Home
            </a>
          </li>
          <li>
            <a href='#profile' className='nav-links'>
              Products
            </a>
          </li>
          <li>
            <a href='#profile' className='nav-links'>
              About Us
            </a>
          </li>
          <li>
            <a href='#profile' className='nav-links'>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
