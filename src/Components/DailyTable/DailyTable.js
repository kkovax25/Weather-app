import React, { Component } from 'react';

class DailyTable extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.day}</td>
        <td>{this.props.maxC}</td>
        <td>{this.props.minC}</td>
      </tr>
    );
  }
}

export default DailyTable;
