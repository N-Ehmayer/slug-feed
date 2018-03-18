import React, { Component } from 'react';
import smileyLogic from '../scripts/smiley-logic.js';

class Smiley extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentiment: this.props.sentiment
    };
  }

  componentWillUpdate() {
      this.updateCanvas();
  }
  updateCanvas() {
      const ctx = this.smileyCanvas.getContext('2d');
      smileyLogic(ctx, this.props.height, this.props.width)(this.props.sentiment);
  }
  render() {
    console.log(this.props.sentiment, 'in smiley');
    return  (
      <div style={{width: this.props.width, overflow: 'auto'}}>
        <canvas ref={ (ref) => this.smileyCanvas = ref } width={this.props.width} height={this.props.height} />
      </div>
    )
  }
}

export default Smiley;
