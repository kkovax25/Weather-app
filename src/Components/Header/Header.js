import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() { 
    return ( 
      <div className='header_cont'>
        <h1 className='header_title'>Weather App</h1>
        <img className='header_icon' src='./img/sun.svg' alt='sun'/>
      </div>
     );
  }
}
 
export default Header;