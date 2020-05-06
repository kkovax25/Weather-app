import React, { Component } from 'react';
import Burger from 'react-css-burger';

class BurgerMenu extends Component {
  state = {
    active: false
  };

  render() {
    return (
      <Burger
        onClick={() => this.setState({ active: !this.state.active })}
        active={this.state.active}
        burger='slider'
        color='white'
        scale={0.8}
        marginTop='8px'
      />
    );
  }
}

export default BurgerMenu;
