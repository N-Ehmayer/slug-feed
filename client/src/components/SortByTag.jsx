import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarFeatures from './NavbarFeatures';
import ArticleCard from './ArticleCard';
import HomeCarousel from './HomeCarousel';
import { fetchArticlesByTag } from '../actions/articlesByTagActions.js';
import axios from 'axios';
import qs from 'query-string';

class SortByTag extends Component {

  // const articles = () => {
  //   const tag = ('this tag', qs.parse(this.props.location.search));
  //   axios.get(`/api/tag/${tag.id}`)
  //     .then( response => {
  //       console.log(response.data);
  //       return response.data;
  //     }).catch(function (error) {
  //       console.error(error);
  //     });
  // }

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
