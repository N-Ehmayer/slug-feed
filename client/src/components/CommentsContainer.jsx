import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      return ( <Comment key={comment} comment={comment} classType={classType} /> )
    })

    return (
      <ReactCSSTransitionGroup transitionName="thing">
        {comments}
      </ReactCSSTransitionGroup>
    );
  }
}

export default CommentsContainer;
