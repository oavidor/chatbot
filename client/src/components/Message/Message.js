import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import './Message.css';
import AvatarImg from '../AvatarImg/AvatarImg';
import MessageText from '../MessageText/MessageText';

import DialogContent from '@material-ui/core/DialogContent';

export default function Message(props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (props) => {
    setChecked((prev) => !prev);
  };

  return (
    <div >
       <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 3000 } : {})}
        >
            <div className="Message">
                <div className="Header">
                    <h3 style={{order:"2"}}>{props.nickname}</h3>
               
                </div>
                <div className="Body">
                <AvatarImg src="/assets/bot_avatar.png" size="Small" shape="Round"/>
                    <MessageText messageText={props.msg}/>
                </div>
            </div>
        </Grow>
    </div>
  );
}