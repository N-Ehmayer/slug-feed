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
      <i className="fa fa-comments-o" aria-hidden="true" style={{...styles}}></i>
      </div>
    </div>
  );
}

export default ArticleHeader;

