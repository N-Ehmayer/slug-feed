import React, { Component } from 'react'
import AuthorCard from './AuthorCard.jsx';
import NavbarFeatures from './NavbarFeatures'
import CommentsContainer from './CommentsContainer.jsx'
import CommentModal from './CommentModal.jsx'
import { connect } from 'react-redux';
import axios from 'axios'

const styles = {
  transition: 'all 0.2s ease-out'
}

const mapStateToProps = (state) => ({
   session: state.session
});

class ShowArticle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      article: {},
      positiveComments: [],
      negativeComments: [],
      commentModalSectionId: null,
      commentsVisible: true,
      sectionToggled: null
    }

    this.showCommentModal = this.showCommentModal.bind(this);
    this.hideCommentModal = this.hideCommentModal.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
    this.toggleSectionComments = this.toggleSectionComments.bind(this);
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

  toggleSectionComments(section_id) {
    if (this.state.sectionToggled === section_id) {
      let positiveComments = [];
      let negativeComments = [];
      this.state.article.sections.forEach( section => {
        section.comments.map( comment => (comment.agree ? positiveComments : negativeComments).push(comment) )
      });
      this.setState({ positiveComments, negativeComments, sectionToggled: null });
    } else {
      const self = this;
      axios.get(`/api/comments?section_id=${section_id}`)
        .then( response => {
          const comments = response.data;
          let positiveComments = [];
          let negativeComments = [];
          comments.map( comment => (comment.agree ? positiveComments : negativeComments).push(comment) );
          self.setState({ positiveComments, negativeComments, commentsVisible: true, sectionToggled: section_id });
        }).catch(function (error) {
          console.log(error);
        });
    }
  };



  render() {
    const article = this.state.article;

    const colours = ['pink', 'blue', 'indigo', 'purple', 'orange', 'green'];
    const articleTags = article.tags && article.tags.map((tag, index) => {
      return (
        <span key={tag.id} className={'badge badge-pill ' + colours[index % colours.length]}>
          <a href={`/tags/${tag.url_slug}`} className='text-white'>{tag.display_name}</a>
        </span>
      )
    });

    const articleSections = article.sections && article.sections.map((section) => {
      return (
        <div key={section.id} className="sections-container">
          <div className="section-container" style={{...styles, transform: 'scale(' + this.state.scale + ')'}}>
            <p className="section-content">{section.content}</p>

            {this.state.sectionToggled === section.id ?
              <div className="comment-icon" style={{'visibility': 'visible'}}>
                <i className="fa fa-sort-amount-desc" aria-hidden="true" onClick={() => this.toggleSectionComments(section.id)} modal={this.state.modal}
                  style={{...styles, transform: 'scale(' + this.state.scale + ')', 'color': 'grey'}}></i>
                <i className="fa fa-commenting" aria-hidden="true" onClick={() => this.showCommentModal(section.id)} modal={this.state.modal}
                  style={{...styles, transform: 'scale(' + this.state.scale + ')'}}></i>
              </div> :
              <div className="comment-icon">
                <i className="fa fa-sort-amount-desc" aria-hidden="true" onClick={() => this.toggleSectionComments(section.id)} modal={this.state.modal}
                  style={{...styles, transform: 'scale(' + this.state.scale + ')'}}></i>
                <i className="fa fa-commenting" aria-hidden="true" onClick={() => this.showCommentModal(section.id)} modal={this.state.modal}
                  style={{...styles, transform: 'scale(' + this.state.scale + ')'}}></i>
              </div>
            }

          </div>
        </div>
      );
    });

    return (
      <div>
        <NavbarFeatures />
        {this.state.commentModalSectionId && <CommentModal section={this.state.commentModalSectionId} hideMe={this.hideCommentModal.bind(this)}/>}
        <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card card-image jumbo-fix" style={{backgroundImage: `url(${article.hero_img_url})`}}>
              <div className="text-white text-center rgba-stylish-light py-5 px-4">
                <div className="py-5 row">
                  <div className="col text-right">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <div className="col-5 text-center align-bottom">
                    <h2 className="article-hero-tagline pt-3 mb-5 font-bold mx-auto" style={{'fontSize': '30px'}}>{article.tagline}</h2>
                  </div>
                  <div className="col text-left">
                    <i class="fa fa-quote-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="rgba-stylish-light d-flex justify-content-between align-items-end">
                <div style={{'fontSize': '20px'}}>{articleTags}</div>
                <span className="text-white badge badge-pill red" style={{'fontSize': '20px'}}>
                  <i className="text-white fa fa-comments">
                   {' ' + Math.floor(article.agreement * 100) + '%'}
                  </i><i className="text-white fa fa-thumbs-up"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="d-block d-md-flex article-section">
          <div className={"w-100 comments-column" + (this.state.commentsVisible ? " animated fadeIn" : " animated fadeOut")}>
            <h3 className="pb-3 comments-column-title">Disagree</h3>

              <CommentsContainer comments={this.state.negativeComments} classType={'neg-comment-container'
              + (this.state.commentsVisible ? " animated fadeIn" : " animated fadeOut")} />
          </div>
          <div className="p-3 w-100 col-6 article-container">
          <div className="container">
          <div className="row">
            <h2 className="pb-3 article-title">{article.title}</h2>
            <div className="toggle-comments" onClick={() => { this.toggleComments()}}><i class="fa fa-comments-o" aria-hidden="true"></i></div>
            </div>

            {articleSections}
            <AuthorCard author={article.author} />
            </div>
          </div>
          <div className={"w-100 comments-column animated" + (this.state.commentsVisible ? " animated fadeIn" : " animated fadeOut")}>
            <h3 className="pb-3 comments-column-title">Agree</h3>
            <CommentsContainer comments={this.state.positiveComments} classType={'pos-comment-container'
            + (this.state.commentsVisible ? " animated fadeIn" : " animated fadeOut")} />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps)(ShowArticle);
