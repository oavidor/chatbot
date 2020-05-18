import React, { Component } from 'react';
import './MessageBar.css';
import io from "socket.io-client";
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


const socket = io.connect("http://localhost:8000");

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

  onMessageSubmit = () => {
    console.log(this.state.avatarImgSrc);
    const { nickname, msg ,type, avatarImgSrc} = this.state;
    if(!msg){
      return false; //todo-ortal add validation message and add 
    }
    socket.emit("chat message", { nickname, msg, type, avatarImgSrc }); //todo-ortal remove and fix
    // console.log(this.props.user.nickname);
    // socket.emit("chat message", { nickname: this.props.user.nickname, msg });
    this.setState({ msg: "" });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onMessageSubmit();
    }
  }

  render() {
    return (
      <div className="MessageBar">
         <TextField 
         id="msg"  type="search" variant="outlined" fullWidth color="primary"
         name="msg"
         onChange={e => this.onTextChange(e)}
         value={this.state.msg}
         onKeyDown={this.handleKeyDown}
         autoFocus
         inputRef={input => input && input.focus()}/>
        <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon>send</SendIcon>}
        onClick={this.onMessageSubmit}>
        Send
      </Button>
      </div>
    );
  }
}
export default MessageBar;