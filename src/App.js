import React, { Component } from 'react';
import './App.scss';
import WeatherCard from './Components/WeatherCard/WeatherCard';

class App extends Component {


  render() {
    return (
      <div className='main-container'>
        <WeatherCard />
      </div>
    );
  }
}

export default App;
