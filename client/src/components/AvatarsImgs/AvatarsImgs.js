import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Button} from '@material-ui/core';
import './AvatarsImages.css';

const images = [
    {
        id: '1',
        url: "/assets/avatars/avatar2.png",
        alt: "avatar2",
        class: 'grow'
    }, {
        id: '2',
        url: "/assets/avatars/avatar3.png",
        alt: "avatar3",
        class: 'grow'
    }, {
        id: '3',
        url: "/assets/avatars/avatar4.png",
        alt: "avatar4",
        class: 'grow'
    }, {
        id: '4',
        url: "/assets/avatars/avatar5.png",
        alt: "avatar5",
        class: 'grow'
    }
];
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}));

export default function AvatarsImgs(props) {
    const classes = useStyles();
    const [activeIdx, setActive] = React.useState(0);

    const chooseAvatar = (event, imageIdx) => {
        images[activeIdx].class = 'grow'; //todo-ortal bad code
        setActive(imageIdx);
        images[imageIdx].class = [images[imageIdx].class, "selected"].join(' ');
        props.chooseAvatar(event);
    };

    return (
        <div className={classes.root}>
            {images.map((image, idx) => (<Avatar
                key={image.id}
                alt={image.alt}
                src={image.url}
                onClick={(event) => chooseAvatar(event, idx)}
                className={image.class}/>))}
        </div>
    );
}