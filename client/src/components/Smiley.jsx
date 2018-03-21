import React, { Component } from 'react';
import smileyLogic from '../scripts/smiley-logic.js';

class Smiley extends Component {

  componentDidMount() { this.redrawSmiley(this.props); }
  componentWillReceiveProps(nextProps) { this.redrawSmiley(nextProps); }

  redrawSmiley(props){
    const canvas = this.smiley;
    const ctx = canvas.getContext('2d');
    ctx.clearRect( 0, 0, props.width, props.height);
    smileyLogic(ctx, props.height, props.width)(props.sentiment);
  }

  render() {
    return  (
      <div style={{width: this.props.width, overflow: 'auto'}}>
        <canvas ref={ref => this.smiley = ref} width={this.props.width} height={this.props.height}></canvas>
      </div>
    );
  }
}

export default Smiley;
