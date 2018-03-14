import React, { Component } from 'react'
import logo from '../logo.svg'
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarFeatures from './components/_navbar_features.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <NavbarFeatures />
      </Router>
    );
  }
}

export default connect(
  state=>({

  }),
  {}
)(App)
