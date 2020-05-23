import React, {Component} from 'react';
import './ChatRoom.css';
import Message from '../Message/Message';
import MessageBar from '../MessageBar/MessageBar';
import socket from '../../Socket'

class ChatRoom extends Component {
    constructor() {
        super();
        this.state = {
            msg: "",
            chat: [],
            nickname: "",
            type: '',
            avatarImgSrc: ''
        };
    }

    componentDidMount() {
        this.getMsg();
        this.scrollToBottom();
        window.addEventListener('scroll', e => this.handleNavigation(e));
    }

    componentDidUpdate() {
        this.scrollToBottom({behavior: "smooth"});
    }

    getMsg(){
        socket.on("chat message", ({nickname, msg, type, avatarImgSrc}) => {
            this.setState({chat: [ ...this.state.chat, {nickname, msg, type, avatarImgSrc}]});
        });
    }

    renderChat() {
        const {chat} = this.state;

        return chat.map(({nickname, msg,type,avatarImgSrc}, idx) => (
            <Message
                msg={msg}
                nickname={nickname}
                userType={type}
                key={idx}
                scroll={this.scrollToBottom}
                avatarImgSrc={avatarImgSrc}/>
        ));
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: "smooth", block: "start"});
    }

    render() {
        return (
            <div className="ChatRoom">
                {/* <div className="chat"> */}
                <div>{this.renderChat()}</div>
                <MessageBar user={this.props.user}/>
                <div style={{marginBottom: "10em", float: 'left'}} ref={(el) => {this.messagesEnd = el;}}></div>
                {/* </div> */}
            </div>
        );
    }
}

export default ChatRoom;