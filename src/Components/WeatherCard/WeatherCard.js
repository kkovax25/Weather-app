import React, { Component } from 'react';
import './WeatherCard.scss';
import DailyTable from '../DailyTable/DailyTable';

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      hourly: [],
      daily: [],
    };
  }

  componentDidMount = async () => {
    const url =
      'https://api.openweathermap.org/data/2.5/onecall?lat=47.5&lon=19.04&units=metric&appid=aa9bd3ee50ab41fefb2d992915c5aac5';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await response.json();
    this.setState({ current: data.current.temp, daily: data.daily, hourly: data.hourly });
  };

  unixConverter = unixDay => {
    const unixTimestamp = unixDay;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString('en-US', { weekday: 'long' });
    // console.log(dateObject);
    // console.log(dateObject.toLocaleString('hu-HU', { timeZoneName: 'short' }));
    // console.log(dateObject.toLocaleString('en-US', { weekday: 'long' }));
    // console.log(
    //   dateObject.toLocaleString('hu-HU', {
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric'
    //   })
    // );
  };

  unixConverterHour = unixHour => {
    const unixTimestamp = unixHour;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString('hu-HU', { hour: 'numeric' });
  };
  render() {
    return (
      <div className='weather-card'>
        <div className='weather-card-header'>
          <h1 className='weather-card-header__temperature'>{Math.round(this.state.current) +'°C'}</h1>
          <p className='weather-card-header__location'>Budapest</p>
        </div>
        <img src='/img/sun.png' alt='sun' className='weather-card__sun' />
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
              {this.state.daily.map(data => (
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
    );
  }
}

export default WeatherCard;
