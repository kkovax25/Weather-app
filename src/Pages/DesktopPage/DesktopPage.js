import React, { Component } from 'react';
import './DesktopPage.scss';
import DesktopDetails from '../../Components/DesktopDetails/DesktopDetails';
import DesktopSideBar from '../../Components/DesktopSideBar/DesktopSideBar';
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class DesktopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      place: '',
      lat: '',
      lon: '',
      humidity: '',
      cloud: '',
      wind: '',
      condition: 'Cloudy',
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
        placeholder: 'Incorrect location'
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
        humidity: data.current.humidity,
        cloud: data.current.clouds,
        wind: data.current.wind_speed,
        condition: data.current.weather[0].main,
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

  render() {
    const {
      isLoaded,
      cloud,
      humidity,
      wind,
      place,
      current,
      condition,
      placeholder
    } = this.state;
    return (
      <div className='desktop-cont'>
        {isLoaded ? (
          <DesktopDetails
            degree={Math.round(current) + '°'}
            location={isLoaded ? place : null}
            src={`/img/desktop/conditions/${condition}.svg`}
            condition={isLoaded ? condition : null}
          />
        ) : null}
        <DesktopSideBar
          placeholder={placeholder}
          onChange={this.handleInput}
          onClick={this.handleSubmit}
          cloud={isLoaded ? cloud + '%' : '0%'}
          humidity={isLoaded ? humidity + '%' : '0%'}
          wind={isLoaded ? Math.round(wind * 3.6) + 'km/h' : '0km/h'}
        />
      </div>
    );
  }
}

export default DesktopPage;
