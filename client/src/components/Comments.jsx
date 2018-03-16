import React, { Component } from 'react';
import moment from 'moment';

class Comments extends Component {

  render() {
    const classType = this.props.classType
    const comments = this.props.comments.map((comment) => {
      return <div className={classType}>
        <img className='rounded-circle user-avatar' src={comment.profile.picture}/>
        <h3 className='username'>{comment.profile.displayName}</h3>
        <p className='comment-content'>{comment.content}</p>
        <p>{moment(comment.created_at).fromNow()}</p>
      </div>
    })

    return (
      <div>
        {comments}
      </div>
    );
  }
}

export default Comments
