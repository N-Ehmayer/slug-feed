import React, { Component } from 'react';
import smileyLogic from '../scripts/smiley-logic.js';

class Smiley extends Component {

  componentDidMount() {
      this.updateCanvas();
  }
  updateCanvas() {
      const ctx = this.smileyCanvas.getContext('2d');
      smileyLogic(ctx, this.state.height, this.state.width)(this.props.sentiment);
  }
  render() {
    return  (
      <div style={{width: this.props.width, overflow: 'auto'}}>
        <canvas ref={ (ref) => this.smileyCanvas = ref } width={this.props.width} height={this.props.height} />
      </div>
    )
  }
}

export default Smiley;
