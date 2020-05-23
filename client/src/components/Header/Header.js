import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AvatarImg from '../AvatarImg/AvatarImg';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Header = (props) => {
    return(
        <AppBar position="fixed">
            <Toolbar>
                {props.closeBtn &&
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={props.handleClose}
                    aria-label="close">
                    <CloseIcon/>
                </IconButton>}
                <AvatarImg src={'/assets/bot_avatar.png'} size="Small" shape="Round" position="up"/>
                <Typography variant="h6" noWrap>
                   {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    closeBtn: PropTypes.bool,
    title: PropTypes.string.isRequired,
    handleClose: function(props, propName, componentName) {
        if ((props['closeBtn'] == true && (props[propName] == undefined || typeof(props[propName]) != 'function'))) {
            return new Error('Please provide a handleClose function!');
        }
    },
};

export default Header;