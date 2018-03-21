import React from 'react';
import Comment from './Comment.jsx';

const CommentsContainer = (props) => {
  console.log(props.height)
  return (
    <div className={props.classType + ' w-100 animated' + (props.isVisible ? ' fadeIn' : ' invisible')} style={{'height': props.height + 'px'}}>
      <h3 className='pb-3 comment-column-header'>{props.title}</h3>
      { props.comments.map(comment => <Comment key={comment.id} comment={comment}/> ) }
    </div>
  );
}

export default CommentsContainer;
