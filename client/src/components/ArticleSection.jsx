import React, { Fragment } from 'react';

const ArticleSection = (props) => {
  const iconStyles = { transition: 'all 0.2s ease-out'}
  const commentStyle = props.isToggled ? {'visibility': 'visible'} : {}
  return (
    <Fragment>
      <p className={props.isToggled ? 'section-content section-toggled' : 'section-content'}>
        {props.section.content}
      </p>
      <div className="comment-icon" style={commentStyle}>
        <i
          className="fa fa-comments"
          aria-hidden="true"
          onClick={() => props.toggleSectionComments(props.section.id)}
          style={{ ...iconStyles }}
        ></i>
        <i
          className="fa fa-commenting"
          aria-hidden="true"
          onClick={() => props.showCommentModal(props.section.id)}
          style={{ ...iconStyles }}
        ></i>
      </div>
    </Fragment>
  )
}

export default ArticleSection;
