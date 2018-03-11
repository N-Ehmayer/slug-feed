import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../node_modules/mdbreact';
import { BrowserRouter as Router } from '../node_modules/react-router-dom';

class NavbarFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav className="ml-auto">
                        <NavItem active>
                            <NavLink className="nav-link" to="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="#">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="#">Pricing</NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>Dropdown</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                            <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures;