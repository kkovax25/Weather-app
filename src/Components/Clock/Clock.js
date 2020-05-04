import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: []
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString('en-US', {
        day: "numeric",
        month: "short",
        hour: 'numeric',
        minute: 'numeric',
        weekday: "short",
      })
    });
  }
  render() {
    return <p>{this.state.time}</p>;
  }
}

export default Clock;