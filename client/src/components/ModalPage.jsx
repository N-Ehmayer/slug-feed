import React from 'react'
import { Input, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import sentiment from 'sentiment'

class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      modal: false,
      messageText: '',
      sentiment: 0,
      section: this.props.section
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onMessageTextChange(event) {
    this.setState({ messageText: event.target.value });
    this.setState({ sentiment: sentiment(this.state.messageText)})
    }

  messageSend(agree) {

    this.toggle

    axios.post('/api/comments', {
      content: this.state.messageText,
      section_id: this.state.section,
      agree: agree
    })
      .then(function(response){
        console.log('Message send success ----\n', response);
      });

    this.setState({ messageText: '' });

  }

  onPressEnter(event) {
    if (event.key === 'Enter') {
      this.messageSend();
    }
  }

  render() {
    return (
      <div>
        <i className="fa fa-comment" aria-hidden="true" onClick={this.toggle}></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>User Comment</ModalHeader>

          <ModalBody>
            <div className="row">
              <div className="col-md-12">

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
          <p>{Math.round(this.state.sentiment.comparative * 10) / 10}</p>
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
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPage;