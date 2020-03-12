import React, { Component } from 'react';

class SelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <select id='cities'>
          <option selected value='none'>----</option>
          <option value='budapest'>Budapest</option>
          <option value='london'>London</option>
          <option value='barcelona'>Barcelona</option>
          <option value='paris'>Paris</option>
        </select>
      </div>
    );
  }
}

export default SelectForm;
