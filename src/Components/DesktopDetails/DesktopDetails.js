import React, { Component } from 'react';
import './DesktopDetails.scss';
import Clock from '../Clock/Clock';

class DesktopDetails extends Component {
  render() {
    return (
      <div className='desktop-details'>
        <h1 className='desktop-details__title'>{this.props.degree}</h1>
        <div className='desktop-details__cont'>
          <h2 className='desktop-details__location'>{this.props.location}</h2>
          <h3 className='desktop-details__date'><Clock/></h3>
        </div>
        <div className='desktop-details__weathercont'>
          <img
            className='desktop-details__icon'
            src='/img/desktop/cloud.svg'
            alt='test'
          />
          <h3 className='desktop-details__condition'>{this.props.condition}</h3>
        </div>
      </div>
    );
  }
}

export default DesktopDetails;

