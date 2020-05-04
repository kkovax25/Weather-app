import React, { Component } from 'react';
import './DesktopPage.scss';
import DesktopDetails from '../../Components/DesktopDetails/DesktopDetails';
import DesktopSideBar from '../../Components/DesktopSideBar/DesktopSideBar';

class DesktopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '17',
      place: 'budapest',
      lat: '',
      lon: '',
      humidity: '',
      cloud: '',
      wind: '',
      condition: 'Cloudy',
      isLoaded: true
    };
  }
  getCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=aa9bd3ee50ab41fefb2d992915c5aac5`;
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
      condition: data.current.weather[0].main
    });
    console.log(this.state);
  };

  handleInput = event => {
    this.setState({ place: event.target.value });
    console.log(this.state.place);
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.searchCity();
    await this.getCity();
    this.setState({ isLoaded: true });
  };

  searchCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.place}&appid=aa9bd3ee50ab41fefb2d992915c5aac5&units=metric`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);

    this.setState({
      lat: data.coord.lat,
      lon: data.coord.lon
    });
    console.log(this.state.lat);
    console.log(this.state.lon);
  };

  render() {
    const {
      isLoaded,
      cloud,
      humidity,
      wind,
      place,
      current,
      condition
    } = this.state;
    return (
      <div className='desktop-cont'>
        {isLoaded ? (
          <DesktopDetails
            degree={Math.round(current) + '°'}
            location={isLoaded ? place : null}
            condition={isLoaded ? condition : null}
          />
        ) : null}
        <DesktopSideBar
          onChange={this.handleInput}
          onClick={this.handleSubmit}
          cloud={isLoaded ? cloud + '%' : '0%'}
          humidity={isLoaded ? humidity + '%' : '0%'}
          wind={isLoaded ? Math.round(wind * 3.6) + 'km/h' : '0km/h'}
        />
        {/* <div className='testes'>
          <p>Please use the mobile version from the <a href='/'>homepage</a></p>
        </div> */}
      </div>
    );
  }
}

export default DesktopPage;
