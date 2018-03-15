import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeatures extends Component {
    render() {
        return (
            <Router>
                <Navbar color="indigo" dark expand="md" scrolling>
                  <div className="row">
                       <NavbarNav className="mx-auto">
                          <NavItem>
                          <p>Slug Feed</p>
                          </NavItem>
                          <NavItem>
                          <p>Login/Logout</p>
                          </NavItem>
                        </NavbarNav>
                    </div>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures
