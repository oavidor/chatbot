import React from 'react';
import Box from '@material-ui/core/Box';
import './MessageText.css';

export default function MessageText(props) {

  return (
           <Box component="div" bgcolor="palevioletred" style={{borderRadius: '8px', minWidth:'40px'}} >
    {props.messageText.indexOf('img') > -1 ? 
     <img src={props.messageText.replace('img_','')} width="150" height="150"/>
     :
    <p className="MessageText">{props.messageText}</p>}
    </Box>
  );
}