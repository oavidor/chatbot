import React, { Component } from 'react';
import './ChatRoom.css';
import Message from '../Message/Message';
import MessageBar from '../MessageBar/MessageBar';
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

class ChatRoom extends Component {
    constructor() {
      super();
      this.state = { msg: "", chat: [], nickname: "" };
    }
  
    componentDidMount() {
      socket.on("chat message", ({ nickname, msg }) => {
        this.setState({
          chat: [...this.state.chat, { nickname, msg }]
        });
      });
    }
  
    // onTextChange = e => {
    //   this.setState({ [e.target.name]: e.target.value });
    // };
  
    // onMessageSubmit = () => {
    //   debugger;
    //   const { nickname, msg } = this.state;
    //   socket.emit("chat message", { nickname, msg });
    //   this.setState({ msg: "" });
    // };
  
    renderChat() {
      const { chat } = this.state;
      return chat.map(({ nickname, msg }, idx) => (
        <div key={idx}>
          <span style={{ color: "green" }}>{nickname}: </span>
  
          <span>{msg}</span>
        </div>
      ));
    }
  
    render() {
      return (
        <div className="ChatRoom">
            <Message />
            <MessageBar/>
        </div>
      );
    }
  }
  export default ChatRoom;