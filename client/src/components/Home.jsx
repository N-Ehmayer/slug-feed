import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ShowArticle from './ShowArticle.jsx'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Home Route</h1>
        <Link to="/article/1">ShowArticle</Link>{ShowArticle}
      </div>
    );
  }
}

export default connect(
  state=>({

  }),
  {}
)(Home)
