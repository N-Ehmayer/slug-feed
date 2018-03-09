import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalUsers: 0,
      currentUser: {
        name: "Anonymous",
        color: "#808080"
      },
      messages: []
    };

    this.setNewUser = this.setNewUser.bind(this);
    this.addNewMessage = this.addNewMessage.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "instant" });
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket = new WebSocket("ws://localhost:3001");// <--- Connects app to server
    console.log("Connected to server");

  /* Grabs incoming data from the server and updates the state. */
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "userTotal") {
        this.setState({totalUsers: data.clientTotal});

      } else {
        const newMessage = this.state.messages.concat(data);
        this.setState({messages: newMessage});
      };
    };

    //this.scrollToBottom();
  };

  componentDidUpdate() {
    this.scrollToBottom();
  };

/* Sets a new username with color and notifies the server. */
  setNewUser(newUserText) {
    const oldUser = this.state.currentUser.name;
    const newUser = newUserText.trim();

    const colors = ["#0000ff", "#ff0000", "#008000", "#FFA500"];
    const randomColor = colors[Math.floor(Math.random()*Math.floor(4))];

    if (oldUser !== newUser && /\S/.test(newUser)) {
      this.setState({currentUser: {name: newUser, color: randomColor}});

      const systemMessageObject = {
        type: "system",
        text: `${oldUser} changed their name to ${newUser}`
      };

      this.socket.send(JSON.stringify(systemMessageObject));
    };
  };

/* Sends new user messages to the server. */
  addNewMessage(messageText) {
    const text = messageText;
    const user = this.state.currentUser.name;
    const color = this.state.currentUser.color;

    const newMessageObject = {
      type: "user",
      text: text,
      user: user,
      color: color
    };

    this.socket.send(JSON.stringify(newMessageObject));
  };


  render() {
    console.log("Rendering <App/>");

    return (
      <div>
      <NavBar userCount={this.state.totalUsers} />
      <MessageList messages={this.state.messages} />
      <div style={{ float:"left", clear: "both" }}
           ref={(el) => { this.messagesEnd = el; }}>
      </div>
      <ChatBar
        currentUser={this.state.currentUser.name}
        newUser={this.setNewUser}
        newMessage={this.addNewMessage} />
      </div>
    );
  };
};

export default App;
