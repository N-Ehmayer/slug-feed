import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import ArticleHeader from './ArticleHeader.jsx';
import ArticleSection from './ArticleSection.jsx';
import ArticleJumbotron from './ArticleJumbotron.jsx';
import AuthorCard from './AuthorCard.jsx';
import CommentsContainer from './CommentsContainer.jsx'
import CommentModal from './CommentModal.jsx'
import NavbarFeatures from './NavbarFeatures'

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
      commentsVisible: false,
      sectionToggled: null,
      articleHeight: 0
    }

    this.showCommentModal = this.showCommentModal.bind(this);
    this.hideCommentModal = this.hideCommentModal.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
    this.toggleSectionComments = this.toggleSectionComments.bind(this);
  }

  componentWillMount() {
    let self = this;
    const pathname = this.props.location.pathname;
    axios.get(`/api${pathname}`)
      .then( response => {
        const article = response.data;
        const positiveComments = [];
        const negativeComments = [];
        article.sections.forEach( section => {
          section.comments.map( comment => (comment.agree ? positiveComments : negativeComments).push(comment) )
        });
        positiveComments.sort((a, b) => (b.initial_score + b.votes_score) - (a.initial_score + a.votes_score))
        negativeComments.sort((a, b) => (b.initial_score + b.votes_score) - (a.initial_score + a.votes_score))
        this.setState({ article, positiveComments, negativeComments });
        this.setState({ articleHeight: self.refs.height.clientHeight });
      }).catch(function (error) {
        console.error(error);
      });
        //console.log(self.refs.height.clientHeight);
  }

  componentDidMount() { window.scrollTo(0, 0); }


  showCommentModal(section_id) { this.setState({ commentModalSectionId: section_id }); }
  hideCommentModal(section_id) {
    this.setState({commentModalSectionId: null})
    axios.get(`/api/comments?section_id=${section_id}`)
      .then( response => {
        const comments = response.data;
        let positiveComments = [];
        let negativeComments = [];
        comments.map( comment => (comment.agree ? positiveComments : negativeComments).push(comment) );
        positiveComments.sort((a, b) => (b.initial_score + b.votes_score) - (a.initial_score + a.votes_score))
        negativeComments.sort((a, b) => (b.initial_score + b.votes_score) - (a.initial_score + a.votes_score))
        this.setState({
          positiveComments,
          negativeComments,
          commentsVisible: true,
          sectionToggled: section_id
        });
      }).catch(error => console.error(error));
  }
  toggleComments() { this.setState({ commentsVisible: !this.state.commentsVisible }); }

  toggleSectionComments(section_id) {
    if (this.state.sectionToggled === section_id) {
      let positiveComments = [];
      let negativeComments = [];
      this.state.article.sections.forEach((section) => {
        section.comments.map( comment => (comment.agree ? positiveComments : negativeComments).push(comment) );
      })
      this.setState({ positiveComments, negativeComments, sectionToggled: null });
      this.toggleComments();
    } else {
      axios.get(`/api/comments?section_id=${section_id}`)
        .then( response => {
          const comments = response.data;
          let positiveComments = [];
          let negativeComments = [];
          comments.map( comment => (comment.agree ? positiveComments : negativeComments).push(comment) );
          positiveComments.sort((a, b) => (b.initial_score + b.votes_score) - (a.initial_score + a.votes_score))
          negativeComments.sort((a, b) => (b.initial_score + b.votes_score) - (a.initial_score + a.votes_score))
          this.setState({ positiveComments, negativeComments, commentsVisible: true, sectionToggled: section_id });
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
          <ArticleSection
            section={section}
            isToggled={this.state.sectionToggled === section.id}
            toggleSectionComments={this.toggleSectionComments}
            showCommentModal={this.showCommentModal}
          />
        </div>
      );
    });

    return (
      <div>
        <NavbarFeatures />
        {this.state.commentModalSectionId && <CommentModal section={this.state.commentModalSectionId} hideMe={this.hideCommentModal.bind(this)}/>}

        {article.id && <ArticleJumbotron article={article}/>}
          <div className="d-block d-md-flex article-section">
            <CommentsContainer
              isVisible={this.state.commentsVisible}
              title={"Disagree"}
              comments={this.state.negativeComments}
              classType={'neg-comment-container'}
              height={this.state.articleHeight}
            />

          <div className="p-3 w-100 col-6 article-container" ref='height'>
            <div className="container">
              <ArticleHeader title={article.title} toggleComments={this.toggleComments} commentsVisible={this.state.commentsVisible} />
              {articleSections}
              <AuthorCard author={article.author} />
            </div>
          </div>

          <CommentsContainer
            isVisible={this.state.commentsVisible}
            title={"Agree"}
            comments={this.state.positiveComments}
            classType={'pos-comment-container'}
            height={this.state.articleHeight}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShowArticle);
