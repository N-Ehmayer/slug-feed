import axios from 'axios';
import React from 'react';
import { Input, Button, Modal, ModalBody } from 'mdbreact';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';

import Smiley from './Smiley.jsx';
import sentiment from 'sentiment';

const mapStateToProps = (state) => ({
   session: state.session
});

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      section: this.props.section
    };

  }

  calcSentiment() { return sentiment(this.state.messageText.trim()); }
  smileySentiment() { return Math.max(-100, Math.min(100, this.calcSentiment().score * 50)); }
  displaySentiment() { return this.calcSentiment().score.toFixed(1); }
  onMessageTextChange(event) { this.setState({ messageText: event.target.value }); }

  messageSend(agree) {
    axios.post('/api/comments', {
      content: this.state.messageText,
      section_id: this.state.section,
      agree: agree
    })
    .then(function(response){
      console.log('Message send success ----\n', response);
    });
    this.props.hideMe();
    this.setState({...this.state, messageText: '' });
  }

  render() {
    const user = this.props.session.user
    return (
      <Modal isOpen={true}>

          <div className="row">
            <div className="col-1">
              <button onClick={this.props.hideMe} type="button" className="close" id="close-comment" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="col" id="comment-avatar">
              <img className="rounded-circle comment-avatar" src={user.picture} alt='article banner'/>
              <p className="comment-user-name">{user.displayName}</p>
            </div>
          </div>

        <ModalBody>
          <div className="row">
            <div className="col-10 mx-auto">
              <Input
                type="textarea"
                value={this.state.messageText}
                onInput={this.onMessageTextChange.bind(this)}
                label="Compose your message..."
              />

            </div>
          </div>
        </ModalBody>
        <div className="row mx-auto">
          <div className="col-3 mx-auto">
          <Button
            className="float-left negative-message-send"
            color="danger"
            onClick={ () => this.messageSend(false)}
          >
            <i className="fa fa-arrow-left mx-auto" aria-hidden="true"></i>
          </Button>
          </div>
          <div className="col-3">
            <p className="sentiment-text align-middle">Points:<br/></p><p className="points">{this.displaySentiment()}</p>
          </div>
          <div className="col-3 mx-auto smiley">
            <Smiley height='50' width='50' sentiment={this.smileySentiment()}/>
          </div>
          <div className="col-3 mx-auto">
            <Button
              className="positive-message-send "
              color="primary"
              onClick={ () =>  this.messageSend(true) }
            >
              <i className="fa fa-arrow-right mx-auto" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(CommentModal);

