import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import './Message.css';
import AvatarImg from '../AvatarImg/AvatarImg';
import MessageText from '../MessageText/MessageText';

import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function Message(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (props) => {
    setChecked((prev) => !prev);
  };

  return (
    // <div className={classes.root}>
    <div>
       <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 3000 } : {})}
        >
            <div className="Message">
                <div className="Header">
                    <h3 style={{order:"2"}}>{props.nickname}</h3>
                <AvatarImg src="/assets/bot_avatar.png" size="Small" shape="Round"/>
                </div>
                <div className="Body">
                    <MessageText messageText={props.msg}/>
                </div>
            </div>
        </Grow>
    </div>
  );
}