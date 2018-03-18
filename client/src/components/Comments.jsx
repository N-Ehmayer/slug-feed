import React, { Component } from 'react';
import moment from 'moment';

class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commentScore: 0, // should be this.props.overallscore
      isUpvote: null
    }
  }

  toggleUpVote() {

  }


  render() {
    const classType = this.props.classType;
    const comments = this.props.comments.map((comment) => {
      return (
        <div key={comment.id} className={classType}>
          <img className='rounded-circle user-avatar' src={comment.profile.picture} alt='article banner'/>
          <h3 className='username'>{comment.profile.displayName}</h3>
          <p className='comment-content'>{comment.content}</p>
          <p className='comment-time'>{moment(comment.created_at).fromNow()}</p>
          <i className="fa fa-plus-circle" aria-hidden="true" onClick={() => this.toggleUpVote()}></i>
          <i className="fa fa-minus-circle" aria-hidden="true" onClick={() => this.toggleUpVote()}></i>
          <p className='comment-score'>{comment.initial_score}</p>
        </div>
      )
    })
    return (
      <div>
        {comments}
      </div>
    );
  }
}

export default Comments
