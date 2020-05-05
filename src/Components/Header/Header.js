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
        </div>
        <img
          src='/img/header.jpg'
          alt='clouds'
          className='header-cont__picture'
        />
      </div>
    );
  }
}

export default Header;
