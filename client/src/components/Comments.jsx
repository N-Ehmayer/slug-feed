import React, { Component } from 'react';
import moment from 'moment';

class Comments extends Component {

  render() {
    const comments = this.props.comments.map((comment) => {
      return <div>
        <img src={comment.profile.picture}/>
        <h3>{comment.profile.displayName}</h3>
        <p>{comment.content}</p>
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
