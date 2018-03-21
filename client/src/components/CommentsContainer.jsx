import React from 'react';
import Comment from './Comment.jsx';

const CommentsContainer = (props) => {
  return (
    <div className={props.classType + ' w-90 animated' + (props.isVisible ? ' fadeIn' : ' invisible')}>
      <h3 className='pb-3 comments-column-title'>{props.title}</h3>
      { props.comments.map(comment => <Comment key={comment.id} comment={comment}/> ) }
    </div>
  );
}

export default CommentsContainer;
