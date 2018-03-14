import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import NavbarFeatures from './NavbarFeatures'
import Home from './Home.jsx'

class ShowArticle extends Component {
  render() {
    return (
      <div className="App">
        <h1>ShowArticle Route</h1>
        <Link to='/'>Home</Link>{Home}
      </div>
    );
  }
}

export default ShowArticle;
