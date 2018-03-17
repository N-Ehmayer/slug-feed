import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, NavbarNav, NavItem } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const mapStateToProps = (state) => ({
   session: state.session
});

class NavbarFeatures extends Component {
  render() {
    return (
      <Navbar light className="to-top" expand="md" fixed="top" scrolling>
        <NavbarNav className="ml-auto">
          <NavItem><NavLink className="nav-link" to="/">Feed</NavLink></NavItem>
          <NavItem><NavbarBrand href="/" className="navbar-logo mx-auto">SlugFeed</NavbarBrand></NavItem>
          {(this.props.session.user || {}).id
            ? <NavItem><a className="nav-link" href="/logout">Logout</a></NavItem>
            : <NavItem><a className="nav-link" href="/login">Login</a></NavItem>
          }
        </NavbarNav>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(NavbarFeatures);
