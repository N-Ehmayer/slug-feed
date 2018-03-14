import React, { Component } from 'react'
import logo from '../logo.svg'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarFeatures from './_navbar_features.jsx'

class App extends Component {
  render() {
    return (
        <NavbarFeatures />

    );
  }
}

export default connect(
  state=>({

  }),
  {}
)(App)
