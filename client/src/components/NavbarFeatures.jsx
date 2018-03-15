import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { Link } from 'react-router-dom';
import Home from './Home.jsx'

class NavbarFeatures extends Component {
  render() {
    return (
      <Navbar color="indigo" dark expand="md" scrolling>
        <div className="row">
          <NavbarNav className="mx-auto">
            <NavItem>
              <Link to='/'>Home</Link>{Home}
              <p>Slug Feed</p>
            </NavItem>
            <NavItem>
              <p>Login/Logout</p>
            </NavItem>
          </NavbarNav>
        </div>
      </Navbar>
    );
  }
}

export default NavbarFeatures
