import React, { Component } from 'react';
import './App.scss';
// import WeatherCard from './Components/WeatherCard/WeatherCard';
import NavBar from './Components/NavBar/NavBar';

// import Clock from './Components/clocktest';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: false
    };
  }

  // adder = () => {
  //   if (this.state.isloaded === false) {
  //     this.setState({ isloaded: true });
  //   }else{
  //     this.setState({isloaded:false})
  //   }
  // };
  render() {
    return (
      <div className='main-container'>
        {/* <button onClick={this.adder}>test</button>
        {this.state.isloaded ? <WeatherCard /> : null} */}
        {/* <WeatherCard/> */}
        <NavBar/>

      </div>
    );
  }
}

export default App;
