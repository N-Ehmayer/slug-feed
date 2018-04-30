import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarFeatures from './NavbarFeatures';
import ArticleCard from './ArticleCard';
import HomeCarousel from './HomeCarousel';
import { fetchArticlesByTag } from '../actions/articlesByTagActions.js';
import qs from 'query-string';

class SortByTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesLength: 0
    }

  }

  componentWillMount() {
    const tag = qs.parse(this.props.location.search);

    this.props.dispatch(fetchArticlesByTag(tag.id));
  }
  render() {
    const { articlesByTag } = this.props;
    console.log(articlesByTag)
    return (
      <div className="App">
        <NavbarFeatures />
        <HomeCarousel articles={articlesByTag}/>
        <div className="container main-container">
          <ArticleCard articles={articlesByTag}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    articlesByTag: store.articlesByTag.articlesByTag
  }
}

export default connect(mapStateToProps)(SortByTag)
