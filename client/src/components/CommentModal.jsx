import React from 'react'
import { Input, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import Smiley from './Smiley.jsx'
import sentiment from 'sentiment'
import ease from '../scripts/ease-func.js'

class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      messageText: '',
      sentiment: 0,
      smileySentiment: 0,
      section: this.props.section
    };
  }

  setSmileSentiment() {
    let originalSentiment = this.state.sentiment;
    let updateSentiment = originalSentiment * 25;
    console.log('in setSmileSentiment: ', updateSentiment, originalSentiment)
    if (updateSentiment >= 100) {
      this.setState({ smileySentiment: 100 });
    }
    if (updateSentiment <= -100) {
      this.setState({ smileySentiment: -100 });
    } else { this.setState({ smileySentiment: updateSentiment }) }
  }

  onMessageTextChange(event) {
    this.setState({ messageText: event.target.value });
    let newSentiment = sentiment(this.state.messageText)
    this.setState({ sentiment: newSentiment.comparative });
    this.setSmileSentiment();
    console.log(this.state.smileySentiment, 'line 38')
  }

  messageSend(agree) {

    axios.post('/api/comments', {
      content: this.state.messageText,
      section_id: this.state.section,
      agree: agree
    })
      .then(function(response){
        console.log('Message send success ----\n', response);
      });

    this.setState({...this.state, messageText: '' });

  }

  onPressEnter(event) {
    if (event.key === 'Enter') {
      this.messageSend();
      this.props.hideMe();
    }
  }

  render() {
    return (
      <Modal isOpen={true}>
        <ModalHeader>User Comment</ModalHeader>

        <ModalBody>
          <div className="row">
            <div className="col-md-12">
              <Smiley height='50' width='50' sentiment={this.state.smileySentiment}/>
              <Input
                type="textarea"
                value={this.state.messageText}
                onInput={this.onMessageTextChange.bind(this)}
                label="Compose your message..."
              />

            </div>
          </div>
        </ModalBody>
        <ModalFooter>
        <p>{Math.round(this.state.sentiment * 10) / 10}</p>
          <Button
            color="secondary"
            onClick={ () =>  this.messageSend(true) }
            onKeyPress={this.onPressEnter.bind(this)}
          >
            <i className="fa fa-send" aria-hidden="true"></i>
          </Button>
          <Button
            color="secondary"
            onClick={ () => this.messageSend(false)}
            onKeyPress={this.onPressEnter.bind(this)}
          >
            <i className="fa fa-send" aria-hidden="true"></i>
          </Button>
          <Button onClick={this.props.hideMe}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalPage;
