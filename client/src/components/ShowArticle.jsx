import React, { Component } from 'react'
import ModalPage from './ModalPage.jsx'
import NavbarFeatures from './NavbarFeatures.jsx'
import Comments from './Comments.jsx'
import axios from 'axios'

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
    const article = this.state.article;
    const articleSections = article.sections && article.sections.map((section) => {
      return (
        <div key={section.id} className="row">
          <div className="col">
            <p>{section.content}</p>
          </div>
          <div className="col-1">
            <ModalPage section={section.id} />
          </div>
        </div>
      );
    });

    const colours = ['pink', 'blue', 'indigo', 'purple', 'orange', 'green'];
    const articleTags = article.tags && article.tags.map((tag, index) => {
      return (
        <span key={tag.id} className={'badge badge-pill ' + colours[index % colours.length]}>
          <a href={`/tags/${tag.url_slug}`} className='text-white'>{tag.display_name}</a>
        </span>
      )
    });

    return (
      <div>
        <NavbarFeatures />

        <div className="row">
          <div className="col-md-12">
            <div className="card card-image" style={{backgroundImage: `url(${article.hero_img_url})`}}>
              <div className="text-white text-center rgba-stylish-light py-5 px-4">
                <div className="py-5">
                  <h2 className="card-title pt-3 mb-5 font-bold mx-auto">{article.tagline}</h2>
                </div>
              </div>
              <div className="rgba-stylish-light">
                {articleTags}
              </div>
            </div>
          </div>
        </div>

        <div className="d-block d-md-flex article-section">
          <div className="w-100 comments-column">
            <h3 className="pb-3 comments-column-title">Disagree</h3>
            <Comments comments={this.state.negativeComments} classType={'neg-comment-container'} />
          </div>
          <div className="p-3 w-100 col-6 article-container">
            <h2 className="pb-3">{article.title}</h2>
            {articleSections}
          </div>
          <div className="w-100 comments-column">
            <h3 className="pb-3 comments-column-title">Agree</h3>
            <Comments comments={this.state.positiveComments} classType={'pos-comment-container'} />
          </div>
        </div>

      </div>
    );
  }
}

export default ShowArticle;
