import React, { Component } from 'react';
import logo from '../img/logo-red-shift.png';
class Logo extends Component {
  render() {
    return (
          <div className="mx-auto logo">
            <img width="300px" src={logo} alt='logo'/>
          </div>

    );
  }
}

export default Logo;
