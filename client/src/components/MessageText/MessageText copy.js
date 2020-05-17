import React from 'react';
// import classes from './MessageText.css'; //use css module?
import './MessageText.css';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';

const MessageText = (props) => (
    // <div className="MessageTextContainer">
    //     {props.messageText.indexOf('img') > -1 ? 
    //      <img src={props.messageText.replace('img_','')} width="150" height="150"/>
    //      :
    //     <p className="MessageText">{props.messageText}</p>}
    // </div>
    <Grow>
    <Box component="div" bgcolor="palevioletred" style={{borderRadius: '8px'}}>
    {props.messageText.indexOf('img') > -1 ? 
     <img src={props.messageText.replace('img_','')} width="150" height="150"/>
     :
    <p className="MessageText">{props.messageText}</p>}
    </Box>
    </Grow>
);
export default MessageText;

{/* <Box component="span" m={1}>
  <Button />
</Box> */}

// accepts: message 
//todo-ortal where to put name of wrtier

// <div class="answer right">
//     <div class="avatar"> 
//     <img src="https://bootdey.com/img/Content/avatar/avatar2.png" 
//     alt="User name"><div class="status offline"></div>
//     </div>
//     <div class="name">Alexander Herthic</div><div class="text"> Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit</div><div class="time">5 min ago</div></div>