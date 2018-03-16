import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { fetchSession } from '../actions/sessionActions.js';

class Session extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSession());
  }

  render() {
    return <div id='Session'></div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchSession: () => dispatch(fetchSession()) };
}

export default connect(mapDispatchToProps, null)(Session);
