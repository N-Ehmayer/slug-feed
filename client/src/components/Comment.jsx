import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import TooltipIcon from './TooltipIcon.jsx';

const UPVOTE = true;
const DOWNVOTE = false;
const NOVOTE = null;

const mapStateToProps = (state) => ({
   session: state.session
});

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.toggleVote = this.toggleVote.bind(this);
    this.currentScore = this.currentScore.bind(this);
  }

  currentScore() {
    return this.state.initial_score + this.state.votes_score;
  }

  toggleVote(clickedVote) {
    if (!(this.props.session.user || {}).id) { return; }
    axios.post('/api/comment_votes', {
      comment_id: this.state.id,
      is_upvote: ((this.state.currentuservotetype === clickedVote) ? NOVOTE : clickedVote)
    }).then(response => {
      axios.get(`/api/comments/${this.state.id}`)
        .then(response => this.setState(response.data[0]) )
        .catch(error => console.error(error))
    }).catch(error => console.error(error));
  }

  render() {
    const upvoteStyle = (this.state.currentuservotetype === UPVOTE ? {color: 'cyan'} : {color: 'lightgrey'});
    const downvoteStyle = (this.state.currentuservotetype === DOWNVOTE ? {color: '#db5e5e'} : {color: 'lightgrey'});

    return (
      <div className={this.props.classType}>
        <img className='rounded-circle user-avatar' src={this.state.poster.picture} alt='article banner'/>
        <h3 className='username'>{this.state.poster.displayName}</h3>
        <p className='comment-content'>{this.state.content}</p>
        <div className='comment-footer'>
          <p className='comment-time'>{moment(this.state.created_at).fromNow()}</p>
          <div className='rating-containers'>
            <TooltipIcon
            style={downvoteStyle}
            icon='minus-circle'
            loginRequired
            validMessage='Downvote'
            invalidMessage='You must be logged in to vote'
            onClick={() => this.toggleVote(DOWNVOTE)} />
            <p className='comment-score'><b>{this.currentScore()}</b></p>
            <TooltipIcon
            style={upvoteStyle}
            icon='plus-circle'
            loginRequired
            validMessage='Upvote'
            invalidMessage='You must be logged in to vote'
            onClick={() => this.toggleVote(UPVOTE)} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Comment);
