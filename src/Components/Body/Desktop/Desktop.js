import React, { Component } from 'react';
import './Desktop.scss';

class Desktop extends Component {
  state = {};
  render() {
    return (
      <div className='body-desktop'>
        <div className='body-desktop__text'>
        <h2 className='body-desktop__text__title'>Or try the desktop version</h2>
        </div>
        <div className='body-desktop__img'>
        <img className='body-desktop__img__picture' src="/img/desktop.png" alt="asd"/>
        </div>
      </div>
    );
  }
}

export default Desktop;
