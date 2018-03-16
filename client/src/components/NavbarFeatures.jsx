import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, NavbarNav, NavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
   session: state.session
});


class NavbarFeatures extends Component {
  render() {
    return (
      <Router>
        <Navbar light main-nav expand="md" scrolling>
          <NavbarNav className="ml-auto">
            <NavItem><Link className="nav-link" to="/">Home</Link></NavItem>
            <NavItem><NavbarBrand href="/" className="navbar-logo mx-auto">SlugFeed</NavbarBrand></NavItem>
            {this.props.session.user
              ? <NavItem><a className="nav-link" href="/logout">Logout</a></NavItem>
              : <NavItem><a className="nav-link" href="/login">Login</a></NavItem>
            }
          </NavbarNav>
        </Navbar>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(NavbarFeatures);
