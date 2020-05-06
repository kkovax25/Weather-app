import React, { Component } from 'react';
import './Desktop.scss';

class Desktop extends Component {
  render() {
    return (
      <div className='body-desktop'>
        <div className='body-desktop__text'>
          <h2 className='body-desktop__text__title'>
            Or try the desktop version
          </h2>
        </div>
        <div className='body-desktop__img'>
          <a href="/desktop">
          <img
            className='body-desktop__img__picture'
            src='/img/desktop.png'
            alt='asd'
          />
          </a>
        </div>
      </div>
    );
  }
}

export default Desktop;
