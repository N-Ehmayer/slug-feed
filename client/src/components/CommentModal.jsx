import React from 'react'
import { Input, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import Smiley from './Smiley.jsx'
import sentiment from 'sentiment'
import ease from '../scripts/ease-func.js'

const mapStateToProps = (state) => ({
   session: state.session
});

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      sentiment: 0,
      smileySentiment: 0,
      section: this.props.section
    };
  }


  componentDidMount() {
  }

  setSmileSentiment() {
    let originalSentiment = this.state.sentiment;
    let updateSentiment = originalSentiment * 25;
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

          <div className="row">
            <div className="col-1">
              <button onClick={this.props.hideMe} type="button" className="close" id="close-comment" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="col" id="comment-avatar">
              <img className="rounded-circle user-avatar comment-avatar" src={this.props.session.user.picture} alt='article banner'/>
              <p className="comment-user-name">{this.props.session.user.displayName}</p>
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
            onKeyPress={this.onPressEnter.bind(this)}
          >
            <i className="fa fa-send mx-auto" aria-hidden="true"></i>
          </Button>
          </div>
          <div className="col-3">
            <p className="sentiment-text align-middle">Points:<br/></p><p className="points">{Math.round(this.state.sentiment * 10) / 10}</p>
          </div>
          <div className="col-3 mx-auto">
            <Smiley height='50' width='50' sentiment={this.state.smileySentiment}/>
          </div>
          <div className="col-3 mx-auto">
            <Button
              className="positive-message-send "
              color="primary"
              onClick={ () =>  this.messageSend(true) }
              onKeyPress={this.onPressEnter.bind(this)}
            >
              <i className="fa fa-send mx-auto" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(CommentModal);

