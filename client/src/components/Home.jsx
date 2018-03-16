import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavbarFeatures from './NavbarFeatures'
import ArticleCard from './ArticleCard'

import ShowArticle from './ShowArticle.jsx'

import { fetchArticles } from '../actions/articleActions.js'



class Home extends Component {

  componentDidMount() {
    this.props.dispatch(fetchArticles());
  }

  render() {
    const { articles } = this.props

    return (
      <div className="App">
        <NavbarFeatures />
        <div className="container main-container">
            <ArticleCard articles={articles}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    articles: store.articles.articles
  }
}

export default connect(mapStateToProps)(Home)
