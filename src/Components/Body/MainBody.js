import React, { Component } from 'react';
import './MainBody.scss';
import WeatherCard from './WeatherCard/WeatherCard';
// import SelectForm from './SelectForm/SelectForm';

class MainBody extends Component {
  render() {
    return (
      <div className='main_body'>
        <h1>Hello Please chose from the list: </h1>
        <button>Chose</button>
        <WeatherCard/>
      </div>
    );
  }
}

export default MainBody;
