import React, { Component } from 'react';
import './DesktopSideBar.scss';
import SearchBar from '../SearchBar/SearchBar';

class DesktopSideBar extends Component {
  render() {
    return (
      <div className='desktop-sidebar'>
        <div className='desktop-sidebar-search'>
          <SearchBar
            onChange={this.props.onChange}
            onClick={this.props.onClick}
            placeholder={this.props.placeholder}
            content={
              <div className='button-cont'>
                <img
                  className='desktop-sidebar-search__button'
                  src='/img/desktop/search.svg'
                  alt='t3'
                ></img>
              </div>
            }
          />
          <div className='desktop-sidebar-history'>
            <h4 className='desktop-sidebar-history__title'>History</h4>
            <p className='desktop-sidebar-history__result'>London</p>
            <p className='desktop-sidebar-history__result'>Madrid</p>
            <p className='desktop-sidebar-history__result'>Barcelona</p>
            <p className='desktop-sidebar-history__result'>Budapest</p>
            <p className='desktop-sidebar-history__result'>Paris</p>
            <p className='desktop-sidebar-history__result'>Berlin</p>
            <p className='desktop-sidebar-history__result'>Manchester</p>
            <p className='desktop-sidebar-history__result'>Milan</p>
          </div>
        </div>
        <div className='devider'></div>
        <div className='desktop-sidebar-details'>
          <h4 className='desktop-sidebar-details__title'>Weather Details</h4>
          <div className='desktop-sidebar-details__items'>
            <p>Cloudy</p>
            <p>{this.props.cloud}</p>
          </div>
          <div className='desktop-sidebar-details__items'>
            <p>Humidity</p>
            <p>{this.props.humidity}</p>
          </div>
          <div className='desktop-sidebar-details__items'>
            <p>Wind</p>
            <p>{this.props.wind}</p>
          </div>
        </div>
        <div className='devider'></div>
      </div>
    );
  }
}

export default DesktopSideBar;
