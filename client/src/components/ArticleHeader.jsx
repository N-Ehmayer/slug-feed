import React from 'react';

const ArticleHeader = (props) => {
  const styles = { transition: 'all 0.2s ease-out' }
  return (
    <div className="row">
      <h2 className="pb-3 article-title">{props.title}</h2>
      <div
        className="toggle-comments"
        onClick={() => { props.toggleComments()}}
      >
      <button className="toggle-comments-button badge badge-pill text-white">
        <i className="fa fa-comment-o" style={{...styles}}></i>
        <p className="toggle-comments-text">View discussion</p>
      </button>
      </div>
    </div>
  );
}

export default ArticleHeader;

