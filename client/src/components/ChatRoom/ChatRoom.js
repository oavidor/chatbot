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
  
    componentDidMount() { //todo-ortal take outside to an action?
      socket.on("chat message", ({ nickname, msg }) => {
        this.setState({
          chat: [...this.state.chat, { nickname, msg }]
        });
      });
      this.scrollToBottom();
    }

    componentDidUpdate() {
      this.scrollToBottom();
    }
  
    renderChat() {
      const { chat } = this.state;
      return chat.map(({ nickname, msg }, idx) => (
        <div key={idx}>
          <Message msg={msg} nickname={nickname}/>
        </div>
      ));
    }

    scrollToBottom = () => {
      this.messagesEnd.scrollIntoView({behavior: "smooth", block: "start"});
    }
  
    render() {
      return (
        <div className="ChatRoom">
          <div>{this.renderChat()}</div>
          <div style={{marginBottom: "6em"}} ref={(el) => { this.messagesEnd = el; }}>
          </div>
          <MessageBar />
        </div>
      );
    }
  }
  
  export default ChatRoom;