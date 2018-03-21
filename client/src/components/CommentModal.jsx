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
    const self = this;
    axios.post('/api/comments', {
      content: this.state.messageText,
      section_id: this.state.section,
      agree: agree
    })
    .then(function(response){
      self.props.hideMe(self.props.section);
      console.log('Message send success ----\n', response);
    });
  }

  render() {
    const user = this.props.session.user
    const isMessage = (this.state.messageText.length > 0)
    return (
      <Modal isOpen={true}>

          <div className="row">
            <div className="col-1">
              <button onClick={() => this.props.hideMe(this.props.section)} type="button" className="close" id="close-comment" aria-label="Close" >
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
            <div className="col">
              <Input
                type="textarea"
                value={this.state.messageText}
                onInput={this.onMessageTextChange.bind(this)}
                label="Compose your message..."/>
            </div>
          </div>
        </ModalBody>
        <div className="row text-center">
          <div className='col text-center'>Disagree</div>
          <div className='col-6'>Positivity Rating</div>
          <div className='col text-center'>Agree</div>
        </div>
        <div className="row">
          <div className="col text-center">
            <Button
              className="float-left"
              color="danger"
              disabled={!isMessage}
              onClick={ () => isMessage ? this.messageSend(false) : false}>
              <i className="fa fa-arrow-left mx-auto" aria-hidden="true"></i>
            </Button>
          </div>
          <div className="points col-3 text-center">{this.displaySentiment()}</div>
          <div className="smiley col-3 text-center">
            <Smiley height='50' width='50' sentiment={this.smileySentiment()}/>
          </div>
          <div className="col text-center">
            <Button
              className="float-right"
              color="primary"
              disabled={!isMessage}
              onClick={ () =>  isMessage ? this.messageSend(true) : false }>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(CommentModal);

