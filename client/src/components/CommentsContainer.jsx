import React from 'react';
import Comment from './Comment.jsx';

const CommentsContainer = (props) => {
  return (
    <div className={props.classType + ' w-100 animated' + (props.isVisible ? ' fadeIn' : ' invisible')}>
      <h3 className='pb-3 comment-column-header'>{props.title}</h3>
      { props.comments.map(comment => <Comment key={comment.id} comment={comment}/> ) }
    </div>
  );
}

export default CommentsContainer;
