import React, { Component } from 'react';
import { connect } from 'react-redux';
import TooltipIcon from './TooltipIcon.jsx';

class ArticleSection extends Component {

  constructor(props) {
    super(props);
    this.state = {shouldShake: false};
  }

  render() {
    const props = this.props;
    const transitionStyles = { transition: 'all 0.2s ease-out'}
    const commentStyle = props.isToggled ? {'visibility': 'visible'} : {}
    const sectionToggleStyle = props.isToggled ? {color: 'pink'} : {}

    return (
      <div className="section-container" style={transitionStyles}>
        <p className={props.isToggled ? 'section-content section-toggled' : 'section-content'}>
          {props.section.content}
        </p>
        <div className="comment-icon d-flex justify-content-around" style={commentStyle}>
          <TooltipIcon
            icon='comments'
            validMessage={props.isToggled ? 'Hide Section Comments' : 'Show Section Comments'}
            onClick={() => props.toggleSectionComments(props.section.id)}
            style={sectionToggleStyle} />
          <TooltipIcon
            icon='commenting'
            loginRequired
            validMessage='Write Comment'
            invalidMessage='You must be logged in to comment'
            onClick={() => props.showCommentModal(props.section.id)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
   session: state.session
});

export default connect(mapStateToProps)(ArticleSection);
