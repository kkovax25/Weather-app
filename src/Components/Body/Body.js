import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './Body.scss';

class Body extends Component {
  state = {};
  render() {
    return (
      <div className='body-cont'>
        <div className='body-cont__maintext'>
          <h2 className='body-cont__maintext__title'>
            Get the most recent weather data
          </h2>
          <p className='body-cont__maintext__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className='body-cont__card'>
        <WeatherCard />
        </div>
      </div>
    );
  }
}

export default Body;
