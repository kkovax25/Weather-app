import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className='header-cont'>
         <div className='header-cont__title'>
          <h1 className='header-cont__title__h1'>
            The
            <br />
            Weather
            <br />
            Forecast
          </h1>
          {/* <p className='header-cont__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p> */}
        </div> 
        <img src='/img/header.jpg' alt='clouds' className='header-cont__picture'/>
      </div>
    );
  }
}

export default Header;
