import React, { Component } from 'react';
import Comment from './Comment.jsx';

class CommentsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const classType = this.props.classType;

    const comments = this.props.comments.map((comment) => {
      return ( <Comment key={comment.id} comment={comment} /> )
    })

    return (
      <div className={classType}>
        {comments}
      </div>
    );
  }
}

export default CommentsContainer;
