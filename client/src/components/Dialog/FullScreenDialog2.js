import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import {indigo} from '@material-ui/core/colors';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';

//todo-ortal move
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

import AvatarImg from '../AvatarImg/AvatarImg'; //todo-ortal need to be sent?

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#2196f3',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',')
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    }
}));

// const Transition = React.forwardRef(function Transition(props, ref) {
// return <Slide direction="up" ref={ref} {...props} timeout={300}/>; }); const
// Transition = React.forwardRef(function Transition(props, ref) {   return
// <Fade direction="up" ref={ref} {...props} timeout={600}/>; //timeout={600}
// });

const animationTiming = {
    enter: 400,
    exit: 1000
};

export default function FullScreenDialog2(props) {
    const classes = useStyles();
    // const [transition, setTransition] = React.useState(TransitionUp);

    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    };

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.open}
            timeout={animationTiming}
            classNames={{
            enter: '',
            enterActive: 'ModalOpen',
            exit: '',
            exitActive: 'ModalClosed'
        }}>

            {/* <Dialog fullScreen open={props.open} onClose={handleClose}  keepMounted scroll={'paper'}>  */}
            <div className="Modal">
                <AppBar position="fixed">
                    <Toolbar>
                        <AvatarImg src="/assets/bot_avatar.png" size="Small" shape="Round"/>
                        <Typography variant="h6" noWrap>
                            Chat Room
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    {props.children}
                </DialogContent>
            </div>
            {/* </Dialog>  */}
        </CSSTransition>
    );
}