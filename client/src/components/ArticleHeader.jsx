import React from 'react';

const ArticleHeader = (props) => {
  const styles = { transition: 'all 0.2s ease-out' }
  return (
    <div className="row">
      <h2 className="pb-3 article-title">{props.title}</h2>
      <button className="toggle-comments-button badge badge-pill text-white" onClick={() => { props.toggleComments()}}>
        <h4 className="toggle-comments-text">{props.commentsVisible ? 'Hide' : 'Show'} discussion</h4>
        <i className={`toggle-comments-icon ${props.commentsVisible ? 'fa fa-comment-o' : 'fa fa-comment'}`} style={{...styles}}></i>
      </button>
    </div>
  );
}

export default ArticleHeader;

