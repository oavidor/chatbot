import React, { Component } from 'react';
import './MessageBar.css';
import SendIcon from '@material-ui/icons/Send';
import socket from '../../Socket'


class MessageBar extends Component {
  constructor() {
    super();
    this.state = { msg: "",  nickname: "", type: 'user',  avatarImgSrc: ''};
  }

  componentDidMount(){
    this.setState({nickname: this.props.user.nickName});
    this.setState({avatarImgSrc: this.props.user.avatarImgSrc});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props !== prevProps){
      this.setState({nickname: this.props.user.nickName});
      this.setState({avatarImgSrc: this.props.user.avatarImgSrc});
    }
  }

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onMessageSubmit();
    }
  }

  onMessageSubmit = () => {
    const { nickname, msg ,type, avatarImgSrc} = this.state;
    if(!msg){
      return false;
    }
    let msgId = Math.floor(Math.random() * 100);
    socket.emit("chat message", { nickname, msg, type, avatarImgSrc, msgId });
    this.setState({ msg: "" });
  };

  handleTyping = (e) => {
    const { nickname, msg ,type, avatarImgSrc} = this.state;
    socket.emit("typing", {msg: e.target.value, nickname, type, avatarImgSrc});
  }

  
  render() {
    return (
      <div className="message-bar">
        <div  className="message-bar-container" >
          <input 
            id="msg" 
            name="msg"
            onChange={e => this.onTextChange(e)}
            value={this.state.msg}
            onKeyDown={this.handleKeyDown}
            onKeyUp={this.handleTyping}
            autoFocus
            className={"message-bar-input"}
            placeholder="Type your message..."
            autoComplete="off"
            ref={input => input && input.focus()}
          />
           <button onClick={this.onMessageSubmit} className={"message-bar-button"}>
              <SendIcon color="primary" />  
           </button>
        </div>
      </div>
    );
  }
}
export default MessageBar;