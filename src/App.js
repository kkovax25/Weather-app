import React, { Component } from 'react';
import './App.scss';
import WeatherCard from './Components/WeatherCard/WeatherCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
      degree: '',
      city: ''
    };
  }

  handleGetWeather = async () => {
    const url =
      'https://api.openweathermap.org/data/2.5/onecall?lat=47.5&lon=19.04&units=metric&appid=aa9bd3ee50ab41fefb2d992915c5aac5';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await response.json();
    this.setState({ test: data });
    console.log(this.state.test.hourly);
  };

  timetester = () => {
    const unixTimestamp = 1587045600;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);

    console.log(dateObject);
    console.log(dateObject.toLocaleString('hu-HU', { timeZoneName: 'short' }));
    console.log(
      dateObject.toLocaleString('hu-HU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })
    );
  };

  render() {
    return (
      <div className='main-container'>
        <WeatherCard />
        {/* <button onClick={this.handleGetWeather}>asd</button>
        <button onClick={this.timetester}>timer</button> */}
      </div>
    );
  }
}

export default App;
