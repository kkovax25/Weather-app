import React, { Component } from 'react';
import './App.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import DesktopPage from './Pages/DesktopPage/DesktopPage';
import LandingPage from './Pages/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={LandingPage} />
        <Route path='/desktop' component={DesktopPage} />
      </Router>
    );
  }
}

export default App;
