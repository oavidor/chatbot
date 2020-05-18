import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Collapse from '@material-ui/core/Collapse';

import AvatarImg from '../AvatarImg/AvatarImg';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import {indigo} from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} timeout={400}/>;
});

export default function FullScreenDialog(props) {
    const [open,
        setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}>
                <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <AvatarImg src={'/assets/bot_avatar.png'} size="Small" shape="Round"/>
                        <Typography variant="h6" noWrap>
                            Chat Room
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    {props.children}
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
    );
}