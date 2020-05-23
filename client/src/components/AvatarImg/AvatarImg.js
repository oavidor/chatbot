import React from 'react';
import './AvatarImg.css';

const AvatarImg = (props) => (
    <div className={["AvatarImg", props.position].join(' ')}>
        <img
            src={props.src}
            alt="Avatar"
            className={[props.size, props.shape].join(' ')}/>
    </div>
);
export default AvatarImg;