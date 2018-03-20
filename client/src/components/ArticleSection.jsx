import React from 'react';

const ArticleSection = (props) => {
  const transitionStyles = { transition: 'all 0.2s ease-out'}
  const commentStyle = props.isToggled ? {'visibility': 'visible'} : {}
  return (
    <div className="section-container" style={{...transitionStyles}}>
      <p className={props.isToggled ? 'section-content section-toggled' : 'section-content'}>
        {props.section.content}
      </p>
      <div className="comment-icon" style={commentStyle}>
        <i
          className="fa fa-comments"
          aria-hidden="true"
          onClick={() => props.toggleSectionComments(props.section.id)}
          style={{ ...transitionStyles }}
        ></i>
        <i
          className="fa fa-commenting"
          aria-hidden="true"
          onClick={() => props.showCommentModal(props.section.id)}
          style={{ ...transitionStyles }}
        ></i>
      </div>
    </div>
  )
}

export default ArticleSection;
