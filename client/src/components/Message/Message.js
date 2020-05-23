import React, {Component} from 'react';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import AvatarImg from '../AvatarImg/AvatarImg';
import MessageContent from '../MessageContent/MessageContent';
import Delayed from '../Dlayed/Dlayed';
import './Message.css';

class Message extends Component {

    state = {
        dispaly: true
    }

    render() {
        //todo-ortal use one if //todo-ortal bot add different class right
        let waitBeforeShow = this.props.userType === "bot"
            ? 500
            : 0;
        let position = this.props.userType === "bot" ? "right" : "" //todo-ortal change to you
        return (
            <Delayed waitBeforeShow={waitBeforeShow} scroll={this.props.scroll}>
                <Grow
                    in={this.state.dispaly}
                    style={{
                    transformOrigin: '0 0 0'
                }}
                    {...(true ? { timeout: 1000 } : {})}>
                    <div className={ ["Message", position].join(' ')}>
                            <AvatarImg src={this.props.avatarImgSrc} size="XS" shape="Round" position = {position}/>
                            <MessageContent
                                nickname={this.props.nickname}
                                messageText={this.props.msg}
                                position = {position}
                                />
                    </div>
                </Grow>
            </Delayed>
        );
    }
}

export default Message;