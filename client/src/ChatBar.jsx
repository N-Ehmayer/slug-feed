import React, {Component} from 'react';

class ChatBar extends Component {
//----------------------------------------------------------------------------------//
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      newUserText: ''
    };

    this.onUserTextChange = this.onUserTextChange.bind(this);
    this.onNewUserSubmit = this.onNewUserSubmit.bind(this);

    this.onMessageTextChange = this.onMessageTextChange.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  }
//----------------------------------------------------------------------------------//
  onUserTextChange(event) {
    this.setState({newUserText: event.target.value});
  };

  onNewUserSubmit(event) {
    if (event.key === 'Enter') {
      this.props.newUser(this.state.newUserText);
    };
  };

  onMessageTextChange(event) {
    this.setState({messageText: event.target.value});
  };

  onMessageSubmit(event) {
    if (event.key === 'Enter' && /\S/.test(this.state.messageText)) {
      this.props.newMessage(this.state.messageText);
      this.setState({messageText: ''});
    };
  };
//----------------------------------------------------------------------------------//
  render() {
    console.log("Rendering <ChatBar/>");

    const currentUser = this.props.currentUser;
//----------------------------------------------------------------------------------//
    return (
      <footer className="chatbar">
        <input
          value={this.state.newUserText}
          onChange={this.onUserTextChange}
          className="chatbar-username"
          placeholder="username"
          onKeyPress={this.onNewUserSubmit} />
        <input
          value={this.state.messageText}
          onChange={this.onMessageTextChange}
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.onMessageSubmit} />
      </footer>
    );
  };
};

export default ChatBar;