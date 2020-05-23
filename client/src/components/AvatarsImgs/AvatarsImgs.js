import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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
        url: "/assets/avatars/avatar6.png",
        alt: "avatar6",
        class: 'grow'
    }
];
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        '& > *': {
            margin: '5px'
        }
    }
}));

export default function AvatarsImgs(props) {
    const classes = useStyles();
    const [activeIdx, setActive] = React.useState(0);

    const chooseAvatar = (event, imageIdx) => {
        images[activeIdx].class = 'grow';
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