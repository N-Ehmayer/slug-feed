import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import NavbarFeatures from './NavbarFeatures'
import Home from './Home.jsx'
import ModalPage from './ModalPage.jsx'
import axios from 'axios'

import { fetchArticle } from '../actions/articleActions.js'

class ShowArticle extends Component {

  constructor(props) {
    super(props)
    const pathname = this.props.location.pathname;

    this.state = {
      article: {}
    };

    const self = this
    axios.get(`http://localhost:3000/api${pathname}`)
      .then(function (response) {
        self.setState({
          article: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {

  }


  getComments(comments) {
  }

  getSections(sections) {

  }


  render() {
    console.log(this.state.article.sections)
    const articleTitle = this.state.article.title
    const articleTagline = this.state.article.tagline
    const articleImg = this.state.article.hero_img_url
    const articleSections = this.state.article.sections && this.state.article.sections.map((section) => {
      return (
        <p>{section.content}</p>
      )
    })

    return (
      <div>
        <NavbarFeatures />

        <div className="row mb-5">
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




        <div className="white-text d-block d-md-flex">

          <div className="p-3 red lighten-1 w-100">

            <h2 className="pb-3">Disagree</h2>
            <p>Comment content</p>
            <p>Comment content</p>
            <p>Comment content</p>
            <p>Comment content</p>


          </div>

          <div className="p-3 blue lighten-1 w-100">

            <h2 className="pb-3">{articleTitle}</h2>
            {articleSections}


          </div>

          <div className="p-3 purple lighten-1 w-100">

            <h2 className="pb-3">Agree</h2>
            <p>Comment content</p>
            <p>Comment content</p>
            <p>Comment content</p>

          </div>

        </div>
    );
  }
}

export default ShowArticle;
