import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
  }
  componentDidMount() {    
        this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <p className={this.props.className}>
       {this.state.time}
      </p>
    );
  }
}

export default Clock;