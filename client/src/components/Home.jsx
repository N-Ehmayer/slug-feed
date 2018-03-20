import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarFeatures from './NavbarFeatures';
import ArticleCard from './ArticleCard';
import HomeCarousel from './HomeCarousel';
import { fetchArticles } from '../actions/articleActions.js';

class Home extends Component {

  componentWillMount() {
    this.props.dispatch(fetchArticles());
  }

  render() {
    const { articles } = this.props
    return (
      <div className="App">
        <NavbarFeatures />
        <HomeCarousel articles={articles}/>
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
