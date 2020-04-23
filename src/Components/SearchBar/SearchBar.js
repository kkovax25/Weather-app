import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  render() {
    return (
      <div className='flexer'>
        <div class='form__group field'>
          <input
            type='text'
            className='form__field'
            placeholder='Name'
            name='name'
            id='name'
            onChange={this.props.onChange}
            required
          />
          <label for='name' class='form__label'>
            Name
          </label>
        </div>
        <div className='submit' onClick={this.props.onClick}>
          Show
        </div>
      </div>
    );
  }
}

export default SearchBar;
