import React, { Component } from 'react';
import './ChatRoom.css';
import Message from '../Message/Message';
import MessageBar from '../MessageBar/MessageBar';
import io from "socket.io-client";


import UserContext from '../../context/userContext';
const socket = io.connect("http://localhost:8000");

class ChatRoom extends Component {
    constructor() {
      super();
      this.state = { msg: "", chat: [], nickname: "", type: '', avatarImgSrc: ''};
    }
  
    static contextType = UserContext;

    componentDidMount() { //todo-ortal take outside to an action?

      socket.on("chat message", ({ nickname, msg, type, avatarImgSrc }) => {
        this.setState({
          chat: [...this.state.chat, { nickname, msg, type, avatarImgSrc }]
        });
      });
      this.scrollToBottom();
      this.prev = window.scrollY;
      window.addEventListener('scroll', e => this.handleNavigation(e));
    }

    componentDidUpdate() {
      this.scrollToBottom({behavior: "smooth"});
      console.log(this.props.user);
    }

    handleNavigation = (e) => { //todo-ortal remove
      const window = e.currentTarget;
  
      if (this.prev > window.scrollY) {
          console.log("scrolling up");
      } else if (this.prev < window.scrollY) {
          console.log("scrolling down");
      }
      this.prev = window.scrollY;
    };
  
    renderChat() {
      const { chat } = this.state;
      console.log(chat);
      return chat.map(({ nickname, msg, type, avatarImgSrc }, idx) => (
          <Message msg={msg} nickname={nickname} userType={type} key={idx} scroll={this.scrollToBottom} avatarImgSrc={avatarImgSrc}/>
      ));
    }

    scrollToBottom = () => {
      this.messagesEnd.scrollIntoView();
    }
  //todo-ortal nickname not realted to the messageBar
    render() {
      return (
        <div className="ChatRoom">
          <div>{this.renderChat()}</div>
          
          <div style={{marginBottom: "6em"}} ref={(el) => { this.messagesEnd = el; }}>
          </div>
          <MessageBar user={this.props.user}/>
        </div>
      );
    }
  }
  
  export default ChatRoom;