import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

const UPVOTE = true;
const DOWNVOTE = false;
const NOVOTE = null;

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
          <div className='rating-container'>
            <i className={'fa fa-minus-circle'} style={downvoteStyle} aria-hidden="true" onClick={() => this.toggleVote(DOWNVOTE)}></i>
            <p className='comment-score'><b>{this.currentScore}</b></p>
            <i className={'fa fa-plus-circle'} style={upvoteStyle} aria-hidden="true" onClick={() => this.toggleVote(UPVOTE)}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;
