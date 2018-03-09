import React, {Component} from 'react';
import Message from './Message.jsx';


class MessageList extends Component {

  render() {
    console.log("Rendering <MessageList/>");

    const messages = this.props.messages.map((message) => {
        return (
          <Message key={message.id} messageData={message} />
        );
    });

    return (
      <main className="messages">
        {messages}
      </main>
    );
  };
};

export default MessageList;