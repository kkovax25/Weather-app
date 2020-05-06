import React, { Component } from 'react';
import './WeatherCard.scss';
import DailyTable from '../DailyTable/DailyTable';
import SearchBar from '../SearchBar/SearchBar';
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      hourly: [],
      daily: [],
      time: new Date().toLocaleString('hu-HU', { hour: 'numeric' }),
      place: '',
      lat: '',
      lon: '',
      isLoaded: false,
      error: false,
      placeholder: 'City'
    };
  }
  searchCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.place}&appid=${API_KEY}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });
      const data = await response.json();
      this.setState({
        lat: data.coord.lat,
        lon: data.coord.lon,
        placeholder: 'City'
      });
    } catch (error) {
      this.setState({
        error: true,
        placeholder: 'Please give me a real location'
      });
    }
  };

  getWeatherData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });
      const data = await response.json();
      this.setState({
        current: data.current.temp,
        daily: data.daily,
        hourly: data.hourly,
        isLoaded: true
      });
    } catch (error) {
      this.setState({ isLoaded: false });
    }
  };

  handleInput = event => {
    this.setState({ place: event.target.value });
  };

  handleSubmit = async () => {
    await this.searchCity();
    await this.getWeatherData();
  };

  unixConverter = unixDay => {
    const unixTimestamp = unixDay;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString('en-US', { weekday: 'long' });
  };

  unixConverterHour = unixHour => {
    const unixTimestamp = unixHour;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString('hu-HU', { hour: 'numeric' });
  };
  render() {
    return (
      <div className='weather'>
        <SearchBar
          placeholder={this.state.placeholder}
          content='Show'
          onChange={this.handleInput}
          onClick={this.handleSubmit}
        />
        <div
          className={this.state.isLoaded ? 'weather-card' : 'weather-card-hide'}
        >
          <div className={`weather-card__bg${this.state.time}`}>
            <div className='weather-card-header'>
              <h1 className='weather-card-header__temperature'>
                {Math.round(this.state.current) + '°C'}
              </h1>
              <p className='weather-card-header__location'>
                {this.state.place}
              </p>
            </div>
            <img src='/img/sun.png' alt='sun' className='weather-card__sun' />
            <img
              src='/img/moon.png'
              alt='moon'
              className='weather-card__moon'
            />
            <img
              src='/img/cloud2.png'
              alt='cloud'
              className='weather-card__cloud'
            />
            <div className='weather-card-hourly'>
              <table>
                <thead>
                  <tr>
                    {this.state.hourly.slice(0, 15).map(hourly => (
                      <th>{this.unixConverterHour(hourly.dt)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {this.state.hourly.slice(0, 15).map(hourly => (
                      <td>
                        <img
                          className='weather-card-hourly__img'
                          src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`}
                          alt='icon'
                        />
                      </td>
                    ))}
                  </tr>
                  <tr className='weather-card-hourly__degree'>
                    {this.state.hourly.slice(0, 15).map(degrees => (
                      <td className='weather-card-hourly__degree__data'>
                        {Math.round(degrees.temp) + '°'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='weather-card-daily'>
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Max</th>
                    <th>Min</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.daily.slice(1, 8).map(data => (
                    <DailyTable
                      day={this.unixConverter(data.dt)}
                      maxC={Math.round(data.temp.max) + '°C'}
                      minC={Math.round(data.temp.min) + '°C'}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
