import React, { Component } from 'react';
import './WeatherCard.scss';

class WeatherCard extends Component {
  render() {
    return (
      <div className='weather-card'>
        <div className='weather-card-header'>
          <h1 className='weather-card-header__temperature'>21°C</h1>
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
                <th>Now</th>
                <th>17</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
                <th>18</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
                <td><img src="/img/cloud.png" alt="cloud"/></td>
              </tr>
              <tr className='test' >
                <td className='testtd'>21°</td>
                <td className='testtd'>2°</td>
                <td className='testtd'>11°</td>
                <td className='testtd'>27°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>31°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>21°</td>
                <td className='testtd'>21°</td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <div className='weather-card-daily'>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Min</th>
                <th>Max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thursday</td>
                <td>10°C</td>
                <td>30°C</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>10°C</td>
                <td>30°C</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10°C</td>
                <td>30°C</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>10°C</td>
                <td>30°C</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>10°C</td>
                <td>30°C</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>10°C</td>
                <td>30°C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
