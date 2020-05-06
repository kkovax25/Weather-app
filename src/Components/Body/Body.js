import React, { Component } from 'react';
import Mobile from './Mobile/Mobile';
import Desktop from './Desktop/Desktop';

class Body extends Component {
  render() {
    return (
      <div>
        <Mobile />
        <Desktop />
      </div>
    );
  }
}

export default Body;
