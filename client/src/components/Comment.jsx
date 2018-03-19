import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

const UPVOTE = true;
const DOWNVOTE = false;
const NOVOTE = null;

class Comment extends Component {
  constructor(props) {
    super(props)

    const comment = this.props.comment
    const currentScore = comment.initial_score + comment.votes_score;

    this.state = {
      isUpvote: null,
      commentScore: currentScore,
      toggleColor: {
        upVote: 'lightgrey',
        downVote: 'lightgrey'
      }
    }
  }

  toggleUpVote(type, commentId, score) {
    const self = this
    if (type === NOVOTE) {
      axios.post('/api/comment_votes', {
        comment_id: commentId,
        is_upvote: UPVOTE
      }).then(response => {
        axios.get(`/api/comments/${commentId}`)
          .then(response => {
            let comment = response.data[0];
            let updatedScore = comment.votes_score + comment.initial_score;
            self.setState({
              isUpvote: UPVOTE,
              commentScore: updatedScore,
              toggleColor: {
                upVote: 'grey',
                downVote: 'lightgrey'
              }
            })
          })
          .catch(error => console.log(error))
      }).catch(error => console.log(error));

    } else {
      axios.post('/api/comment_votes', {
        comment_id: commentId,
        is_upvote: NOVOTE
      }).then(response => {
        axios.get(`/api/comments/${commentId}`)
          .then(response => {
            let comment = response.data[0];
            let updatedScore = comment.votes_score + comment.initial_score;
            console.log(comment);
            self.setState({
              isUpvote: NOVOTE,
              commentScore: updatedScore,
              toggleColor: 'grey'
            })
          })
          .catch(error => console.log(error))
      }).catch(error => console.log(error));

    }
  }

  toggleDownVote(type, commentId, score) {
    const self = this
    if (type === NOVOTE) {
      axios.post('/api/comment_votes', {
        comment_id: commentId,
        is_upvote: DOWNVOTE
      }).then(response => {
        axios.get(`/api/comments/${commentId}`)
          .then(response => {
            const comment = response.data[0];
            let updatedScore = comment.votes_score + comment.initial_score;
            self.setState({
              isUpvote: DOWNVOTE,
              commentScore: updatedScore,
              toggleColor: {
                upVote: 'lightgrey',
                downVote: 'grey'
              }
            })
          })
          .catch(error => console.log(error))
      }).catch(error => console.log(error));

    } else {
      axios.post('/api/comment_votes', {
        comment_id: commentId,
        is_upvote: NOVOTE
      }).then(response => {
        axios.get(`/api/comments/${commentId}`)
          .then(response => {
            const comment = response.data[0];
            let updatedScore = comment.votes_score + comment.initial_score;
            self.setState({
              isUpvote: NOVOTE,
              commentScore: updatedScore,
              toggleColor: 'lightgrey'
            })
          })
          .catch(error => console.log(error))
      }).catch(error => console.log(error));
    }
  }


  render() {
    const comment = this.props.comment
    console.log(this.state.commentScore);
    return (
      <div className={this.props.classType}>
        <img className='rounded-circle user-avatar' src={comment.poster.picture} alt='article banner'/>
        <h3 className='username'>{comment.poster.displayName}</h3>
        <p className='comment-content'>{comment.content}</p>
        <div className='comment-footer'>
          <p className='comment-time'>{moment(comment.created_at).fromNow()}</p>
          <div className='rating-container'>
            <i className="fa fa-minus-circle" aria-hidden="true" onClick={() => this.toggleDownVote(this.state.isUpvote, comment.id)}
              style={{"color": this.state.toggleColor.downVote}}></i>
            <p className='comment-score'><b>{this.state.commentScore}</b></p>
            <i className="fa fa-plus-circle" aria-hidden="true" onClick={() => this.toggleUpVote(this.state.isUpvote, comment.id)}
              style={{"color": this.state.toggleColor.upVote}}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;
