import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';

class LandingPage extends Component {
  render() {
    return (
      <div className='main-container'>
        <NavBar />
        <Header />
        <Body />
      </div>
    );
  }
}

export default LandingPage;
