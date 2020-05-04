import React, { Component } from 'react';
import './Body.scss';
import Mobile from './Mobile/Mobile';
import Desktop from './Desktop/Desktop';

class Body extends Component {
  state = {};
  render() {
    return (
      <div>
        <Mobile/>
        <Desktop/>
        </div>
    );
  }
}

export default Body;
