import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeatures extends React.Component {
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
								  <div className="row">
											 <NavbarNav className="mx-auto">
												  <NavItem>
													   <NavLink className="nav-link" href="/">Slug Feed</NavLink>
												  </NavItem>
												  <NavItem>
														  <NavLink className="nav-link" to="#">Pricing</NavLink>
												  </NavItem>
														<form className="form-inline">
														  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
														</form>
												</NavbarNav>
										</div>
								</Navbar>
						</Router>
				);
		}
}

export default NavbarFeatures