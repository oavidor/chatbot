//props: shape: round, square, radius, size: small, big, medium, src? //todo-ortal remove
import React from 'react';
// import burgerLogo from '../../assets/images/burger-logo.png'; //todo-ortal remove
import classes from './AvatarImg.css'; //use css module?


const AvatarImg = (props) => (
    <div className="AvatarImg">
        <img src={props.src} alt="Avatar" className={[props.size, props.shape].join(' ')}/>
    </div>
);
export default AvatarImg;

    // <div className={[classes.AvaterImg, classes[props.size]].join(' ')} >