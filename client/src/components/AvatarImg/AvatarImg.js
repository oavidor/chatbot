import React from 'react';
import './AvatarImg.css';

const AvatarImg = (props) => (
    <div className="AvatarImg">
        <img
            src={props.src}
            alt="Avatar"
            className={[props.size, props.shape].join(' ')}/>
    </div>
);
export default AvatarImg;