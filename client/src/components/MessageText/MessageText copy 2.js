import React from 'react';
import Box from '@material-ui/core/Box';
import './MessageText.css';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';

export default function MessageText(props) {

  return (
           <Box component="div" bgcolor="palevioletred" style={{borderRadius: '8px', minWidth:'40px'}} >
   <Grid
          container
          // spacing={2}
          direction="column"
          justify="flex-start"
          // alignItems="center"
          >  
             <div className="MessageText">
    {props.messageText.indexOf('img') > -1 ? 
     <img src={props.messageText.replace('img_','')} width="150" height="150"/>
     :
  
      <p >{props.messageText}</p>}
        {/* <div>{moment().format('YYYY-MM-DD h:mm:ss a')}</div> */}
        <div style={{justifySelf: "end"}}>{moment().format('h:mm:ss a')}</div>
     </div>
  
          </Grid>
    </Box>
  );
}