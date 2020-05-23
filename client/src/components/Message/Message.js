import React, {Component} from 'react';
import Grow from '@material-ui/core/Grow';
import AvatarImg from '../AvatarImg/AvatarImg';
import MessageContent from '../MessageContent/MessageContent';
import Delayed from '../Dlayed/Dlayed';
import './Message.css';

class Message extends Component {

    state = {
        dispaly: true
    }

    getPropsByUser = () => {
        const bot = {waitBeforeShow: 500, position: "right"};
        const user = {waitBeforeShow: 0, position: ""};
        return this.props.userType === "bot" ? bot : user;
    }


    render() {
        let userProps = this.getPropsByUser();
        return (
            <Delayed waitBeforeShow={userProps.waitBeforeShow} scroll={this.props.scroll}>
                <Grow
                    in={this.state.dispaly}
                    style={{transformOrigin: '0 0 0'}}
                    {...(true ? { timeout: 1000 } : {})}>
                    <div className={ ["Message", userProps.position].join(' ')}>
                            <AvatarImg src={this.props.avatarImgSrc} size="XS" shape="Round" position = {userProps.position}/>
                            <MessageContent
                                nickname={this.props.nickname}
                                messageText={this.props.msg}
                                position = {userProps.position}
                                />
                    </div>
                </Grow>
            </Delayed>
        );
    }
}

export default Message;