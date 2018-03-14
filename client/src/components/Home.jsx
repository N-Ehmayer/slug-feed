import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavbarFeatures from './NavbarFeatures'

import ShowArticle from './ShowArticle.jsx'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeatures />

        <h1>Home Route</h1>
        <Link to="/article/1">ShowArticle</Link>
      </div>
    );
  }
}

export default connect(
  state=>({

  }),
  {}
)(Home)
