import React, { Component } from 'react'
import NavbarFeatures from './NavbarFeatures'
import CommentsContainer from './CommentsContainer.jsx'
import CommentModal from './CommentModal.jsx'
import axios from 'axios'

const styles = {
  transition: 'all 0.2s ease-out'
}

class ShowArticle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      article: {},
      positiveComments: [],
      negativeComments: [],
      commentModalSectionId: null,
      commentsVisible: false
    }

    this.showCommentModal = this.showCommentModal.bind(this);
    this.hideCommentModal = this.hideCommentModal.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    const self = this;
    axios.get(`/api${pathname}`)
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

  showCommentModal(section_id) {
    console.log('clicked comment modal');
    this.setState({ commentModalSectionId: section_id });
  }

  hideCommentModal() {
    this.setState({ commentModalSectionId: null });
  }

  toggleComments() {
    this.state.commentsVisible ? this.setState({ commentsVisible: false }) : this.setState({ commentsVisible: true })
  }


  render() {
    const article = this.state.article;
    const articleSections = article.sections && article.sections.map((section) => {
      return (
        <div key={section.id} className="sections-container">
          <div className="section-container" style={{...styles, transform: 'scale(' + this.state.scale + ')'}}>
            <p className="section-content">{section.content}</p>
            <div className="col-1 comment-icon">
              <i className="fa fa-comment" aria-hidden="true" onClick={() => this.showCommentModal(section.id)} modal={this.state.modal}
                style={{...styles, transform: 'scale(' + this.state.scale + ')'}}></i>
            </div>
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
    console.log(this.state.commentsVisible);
    return (
      <div>
        <NavbarFeatures />
        {this.state.commentModalSectionId && <CommentModal section={this.state.commentModalSectionId} hideMe={this.hideCommentModal}/>}
        <div className="row">
          <div className="col-md-12">
            <div className="card card-image" style={{backgroundImage: `url(${article.hero_img_url})`}}>
              <div className="text-white text-center rgba-stylish-light py-5 px-4">
                <div className="py-5">
                  <h2 className="article-hero-tagline pt-3 mb-5 font-bold mx-auto">{article.tagline}</h2>
                </div>
              </div>
              <div className="rgba-stylish-light">
                {articleTags}
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => { this.toggleComments()}}>Toggle Discussion</button>

        <div className="d-block d-md-flex article-section">
          <div className="w-100 comments-column">
            <h3 className="pb-3 comments-column-title">Disagree</h3>
            { this.state.commentsVisible ?
              <CommentsContainer comments={this.state.negativeComments} classType={'neg-comment-container'} />
              : null }
          </div>
          <div className="p-3 w-100 col-6 article-container">
            <h2 className="pb-3">{article.title}</h2>
            {articleSections}
          </div>
          <div className="w-100 comments-column">
            <h3 className="pb-3 comments-column-title">Agree</h3>
            { this.state.commentsVisible ?
            <CommentsContainer comments={this.state.positiveComments} classType={'pos-comment-container'} />
            : null }
          </div>
        </div>

      </div>
    );
  }
}

export default ShowArticle;
