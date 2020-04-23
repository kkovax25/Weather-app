import React, { Component } from 'react';
import './App.scss';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <NavBar />
        <Header />
        {/* <WeatherCard/> */}
      </div>
    );
  }
}

export default App;
