import { Tooltip } from 'mdbreact';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TooltipIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {shouldShake: false};
  }

  shake() {
    this.setState({shouldShake: true}, () => {
        const self = this;
        setTimeout(() => self.setState({shouldShake: false}), 1000);
    });
  }

  render() {
    const props = this.props;
    const loggedIn = ((props.session.user || {}).id !== undefined);
    const loginRequired = (props.loginRequired == true);
    const transitionStyles = { transition: 'all 0.2s ease-out'};
    const onClick = props.loginRequired
      ? () => loggedIn ? props.onClick() : this.shake()
      : () => props.onClick();
    const tooltipContent = (props.loginRequired && !loggedIn) ? props.invalidMessage : props.validMessage;

    return (
      <Tooltip placement='top' tooltipContent={tooltipContent} >
        <i
          className={'fa animated fa-' + props.icon + (this.state.shouldShake ? ' shake' : '')}
          aria-hidden="true"
          onClick={() => onClick() }
          style={ transitionStyles  }
        ></i>
      </Tooltip>
    )
  }
}


const mapStateToProps = (state) => ({
   session: state.session
});

export default connect(mapStateToProps)(TooltipIcon);
