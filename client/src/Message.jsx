import React, {Component} from 'react';

class Message extends Component {

  render() {
    console.log("Rendering <Message/>");

    const message = this.props.messageData;
    const color = this.props.messageData.color;
    console.log(color);

    if (message.type === 'user') {
      return (
        <div className="message">
          <span className="message-username" style={{"color": color}}>{message.user}</span>
          <span className="message-content">{message.text}</span>
        </div>
      );

    } else if (message.type === 'system') {
      return (
        <div className="message system">
          {message.text}
        </div>
      );
    };
  };
};

export default Message;