import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AvatarsImgs(props) {
  const classes = useStyles(); //todo-ortal use loop

  
  return (
    <div className={classes.root}>
      <Avatar alt="Avatar1" src="/assets/avatars/avatar1.png" onClick={props.chooseAvatar} />
      <Avatar alt="Avatar2 Howard" src="/assets/avatars/avatar2.png"  onClick={props.chooseAvatar}/>
      <Avatar alt="Avatar3 Baker" src="/assets/avatars/avatar3.png" onClick={props.chooseAvatar}/>
      <Avatar alt="Avatar4" src="/assets/avatars/avatar4.png" onClick={props.chooseAvatar}/>
      <Avatar alt="Avatar5 Howard" src="/assets/avatars/avatar5.png" onClick={props.chooseAvatar}/>
    </div>
  );
}