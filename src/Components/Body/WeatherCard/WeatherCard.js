import React, { Component } from 'react';
import './WeatherCard.scss';

class WeatherCard extends Component {
  state = {};
  render() {
    return (
      <div className='weatherCard_cont'>
        <h2>Budapest</h2>
        <h3>Clear</h3>
        <table>
          <tr>
            <th>Feels Like</th>
            <th>Min</th>
            <th>Max</th>
          </tr>
          <tr>
            <td>15°C</td>
            <td>15°C</td>
            <td>15°C</td>
          </tr>
          <tr>
            <th>Sunrise</th>
            <th>Sunset</th>
          </tr>
          <tr>
            <td>7:40</td>
            <td>17:40</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default WeatherCard;


