import React from 'react';
import Box from '@material-ui/core/Box';
import './MessageContent.css';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//todo-ortal use style component

export default function MessageContent(props) {

    return (
        <Box
            component="div"
            bgcolor="palevioletred"
            style={{
            borderRadius: '8px',
            minWidth: '40px'
        }}>
            <Grid
                container
                className="MessageTextContainer"
                style={{
                backgroundColor: props.backgroundColor
            }}
                direction="column">
                <Grid direction="row" justify="center" alignItems="center">
                    {props
                        .messageText
                        .indexOf('img') > -1
                        ? <img
                                src={props
                                .messageText
                                .replace('img_', '')}
                                width="150"
                                height="150"/>
                        : <Typography className="MessageContent" variant="body1">{props.messageText}</Typography>
}
                </Grid>

                <Grid direction="row" justify="flex-end" alignItems="flex-end">
                    <div className="time-right">{moment().format('h:mm a')}</div>
                </Grid>
            </Grid>

        </Box>

    );
}