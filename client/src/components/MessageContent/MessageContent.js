import React from 'react';
import './MessageContent.css';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function MessageContent(props) {

    const renderContent = () => {
        return props.messageText.indexOf('img') > -1 ? 
        <img 
            src={props.messageText.replace('img_', '')}
            width="150"
            height="150"
        />
        : <Typography style={{fontSize: "0.85rem"}} className="MessageContent" variant="body1">{props.messageText}</Typography>;
        
    }
    
    return (
        <div>
            <Grid
                container
                className={ ["MessageTextContainer", props.position].join(' ')}
                direction="column">
                     {/* <div>{props.nickname}</div> */}
                    {renderContent()}
            </Grid>
            <div className="time">{moment().format('h:mm a')}</div>
        </div>
    );
}