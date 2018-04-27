import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarFeatures from './NavbarFeatures';
import ArticleCard from './ArticleCard';
import HomeCarousel from './HomeCarousel';
import { fetchArticles } from '../actions/articleActions.js';
import axios from 'axios';
import qs from 'query-string';

class SortByTag extends Component {

  getArticleTags() {
    const tag = ('this tag', qs.parse(this.props.location.search));
    axios.get(`/api/tag/${tag.id}`)
      .then( response => {
        const articles = response.data;
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  }
  articleSort() {
    const articles = this.props;
  }

  componentWillMount() {
    this.getArticleTags();
  }
  render() {
    return (
      <div className="App">
        <NavbarFeatures />
        <div className="container main-container">
        </div>
      </div>
    );
  }
}

export default SortByTag;
