import React from 'react';
import Box from '@material-ui/core/Box';
import './MessageText.css';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
//todo-ortal use style component

export default function MessageText(props) {

  return (
<Box component="div" bgcolor="palevioletred" style={{borderRadius: '8px', minWidth:'40px'}}>
<div className="MessageTextContainer" 
style={{backgroundColor: props.backgroundColor}}
>
        {props.messageText.indexOf('img') > -1 ? 
         <img src={props.messageText.replace('img_','')} width="150" height="150"/>
         :
        <div className="MessageText">{props.messageText}</div>}
             <div className="time-right">{moment().format('h:mm a')}</div>
    </div>
</Box> 
  
  );
}