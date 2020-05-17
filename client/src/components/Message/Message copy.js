import React from 'react';
import './Message.css';
import AvatarImg from '../AvatarImg/AvatarImg';
import MessageText from '../MessageText/MessageText';

const Message = (props) => (
    <div className="Message">
        <div className="Header">
            <h3 style={{order:"2"}}>{props.nickname}</h3>
        <AvatarImg src="/assets/bot_avatar.png" size="Small" shape="Round"/>
        </div>
        <div className="Body">
            <MessageText messageText={props.msg}/>
        </div>
       
    </div>
);
export default Message;

//todo-ortal: add props: messageType: text/img(sticker) answerType: user/bot
//userName props
//todo-ortal fix styly


{/* <div className="Message">
<div className="Header">
<h3>Zoee</h3>
</div>
<div className="Body">
    <AvatarImg src="/assets/avatar-v1.png" size="Small" shape="Round"/>
    <MessageText MessageText={"Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit"} />
</div>

</div> */}


{/* <div className="Message">
<div className="Header">
    <h3 style={{order:"2"}}>{props.nickname}</h3>
<AvatarImg src="/assets/avatar-v1.png" size="Small" shape="Round"/>
</div>
<div className="Body">
   
    <MessageText MessageText={props.msg} />
</div>

</div> */}