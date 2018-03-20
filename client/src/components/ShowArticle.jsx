import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import ArticleSection from './ArticleSection.jsx';
import ArticleJumbotron from './ArticleJumbotron.jsx';
import AuthorCard from './AuthorCard.jsx';
import CommentsContainer from './CommentsContainer.jsx'
import CommentModal from './CommentModal.jsx'
import NavbarFeatures from './NavbarFeatures'

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
    const articleSections = article.sections && article.sections.map((section) => {
      return (
        <div key={section.id} className="sections-container">
          <div className="section-container" style={{...styles, transform: 'scale(' + this.state.scale + ')'}}>
            <ArticleSection
              section={section}
              isToggled={this.state.sectionToggled === section.id}
              toggleSectionComments={this.toggleSectionComments}
              showCommentModal={this.showCommentModal}
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        <NavbarFeatures />
        {this.state.commentModalSectionId && <CommentModal section={this.state.commentModalSectionId} hideMe={this.hideCommentModal.bind(this)}/>}
        <ArticleJumbotron article={article}/>

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
            <div className="toggle-comments" onClick={() => { this.toggleComments()}}><i class="fa fa-comments-o" aria-hidden="true"
              style={{...styles, transform: 'scale(' + this.state.scale + ')'}}></i></div>
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
