import React, { Component } from 'react';
import './App.scss';
import WeatherCard from './Components/WeatherCard/WeatherCard';
// import Clock from './Components/clocktest';

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
