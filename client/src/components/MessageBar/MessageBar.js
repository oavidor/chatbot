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
    this.state = { msg: "",  nickname: "Zoee" };
  }

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onMessageSubmit = () => {
    const { nickname, msg } = this.state;
    if(!msg){
      return false; //todo-ortal add validation message and add 
    }
    socket.emit("chat message", { nickname, msg });
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
        {/* <input id="m" autoComplete="off"
         name="msg"
         onChange={e => this.onTextChange(e)}
         value={this.state.msg}
         onKeyDown={this.handleKeyDown}
        /> */}
         <TextField 
         id="outlined-search"  type="search" variant="outlined" fullWidth color="primary"
         id="m" autoComplete="off"
         name="msg"
         onChange={e => this.onTextChange(e)}
         value={this.state.msg}
         onKeyDown={this.handleKeyDown}
         />
        {/* <button onClick={this.onMessageSubmit}  >Send</button> */}
        <Button
        variant="contained"
        color="primary"
        // className={classes.button}
        endIcon={<SendIcon>send</SendIcon>}
      >
        Send
      </Button>
      </div>
    );
  }
}
export default MessageBar;