import React, {Component} from 'react';

class NavBar extends Component {

  render() {

    const userCount = this.props.userCount;

    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p className="user-counter">{userCount} users online</p>
      </nav>
    );
  };
};

export default NavBar;