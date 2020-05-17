//children message and avater
// a list of this.
import React from 'react';
import './ChatRoom.css';
import Message from '../Message/Message';
import MessageBar from '../MessageBar/MessageBar';

const ChatRoom = (props) => (
    <div className="ChatRoom">
          <Message />
          <MessageBar />
    </div>
);
export default ChatRoom;

//todo-ortal need to insert messages with push


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
  
    onTextChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    onMessageSubmit = () => {
      const { nickname, msg } = this.state;
      socket.emit("chat message", { nickname, msg });
      this.setState({ msg: "" });
    };
  
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
          <span>Nickname</span>
          <input
            name="nickname"
            onChange={e => this.onTextChange(e)}
            value={this.state.nickname}
          />
          <span>Message</span>
          <input
            name="msg"
            onChange={e => this.onTextChange(e)}
            value={this.state.msg}
          />
          <button onClick={this.onMessageSubmit}>Send</button>
          <div>{this.renderChat()}</div>
        </div>
      );
    }
  }
  
  export default ChatRoom;