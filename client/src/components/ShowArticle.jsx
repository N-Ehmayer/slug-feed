import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import NavbarFeatures from './NavbarFeatures'
import Home from './Home.jsx'
import Comments from './Comments.jsx'
import ModalPage from './ModalPage.jsx'
import axios from 'axios'

import { fetchArticle } from '../actions/articleActions.js'

class ShowArticle extends Component {

  constructor(props) {
    super(props);

    this.state = { article: {}, positiveComments: [], negativeComments: [] }
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    const self = this;
    axios.get(`http://localhost:3000/api${pathname}`)
      .then( response => {
        const article = response.data;
        const positiveComments = [];
        const negativeComments = [];
        article.sections.forEach( section => {
          section.comments.map( comment => (comment.agree ? positiveComments : negativeComments).push(comment) )
        });
        self.setState({ article, positiveComments, negativeComments });
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this);
    console.log(this.state);
    const articleTitle = this.state.article.title;
    const articleTagline = this.state.article.tagline;
    const articleImg = this.state.article.hero_img_url;
    const articleSections = this.state.article.sections && this.state.article.sections.map((section) => {
      return (
        <div className="row">
          <div className="col">
            <p>{section.content}</p>
          </div>
          <div className="col-1">
            <ModalPage section={section.id} />
          </div>
        </div>
      );
    });
    const positiveComments = this.state.positiveComments;
    const negativeComments = this.state.negativeComments;

    return (
      <div>
        <NavbarFeatures />

        <div className="row">
          <div className="col-md-12">
            <div className="card card-image" style={{backgroundImage: `url(${articleImg})`}}>
              <div className="text-white text-center rgba-stylish-strong py-5 px-4">
                <div className="py-5">

                  <h2 className="card-title pt-3 mb-5 font-bold">{articleTagline}</h2>
                  <a className="btn peach-gradient"><i className="fa fa-clone left"></i> View project</a>

                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="d-block d-md-flex article-section">

          <div className="w-100 comments-column">

            <h3 className="pb-3 comments-column-title">Disagree</h3>
            <Comments comments={this.state.negativeComments} classType={"neg-comment-container"} />

          </div>


          <div className="p-3 w-100 col-6 article-container">

            <h2 className="pb-3">{articleTitle}</h2>
            {articleSections}


          </div>

          <div className="w-100 comments-column">

            <h3 className="pb-3 comments-column-title">Agree</h3>
            <Comments comments={this.state.positiveComments} classType={"pos-comment-container"} />

          </div>

        </div>

      </div>
    );
  }
}

export default ShowArticle;
