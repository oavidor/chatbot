import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import './Message.css';
import AvatarImg from '../AvatarImg/AvatarImg';
import MessageText from '../MessageText/MessageText';
import Grid from '@material-ui/core/Grid';

// import DialogContent from '@material-ui/core/DialogContent';
import Delayed from '../UI/Dlayed';




class Message extends Component {

  state = {
    dispaly: true
  }

  render() {
    console.log(this.props.userType)
    let waitBeforeShow = this.props.userType === "bot"  ? 500 : 0;
    let backgroundColor = this.props.userType === "bot" ? "#7266ba" : "#ff1744";
    return (
      <Delayed waitBeforeShow={waitBeforeShow} scroll={this.props.scroll}>
      <Grow
      in={this.state.dispaly}
      style={{ transformOrigin: '0 0 0' }}
      {...(true ? { timeout: 1000 } : {})}
    >
        {/* <div className="Message">
            <div className="Header">
                <h3 style={{order:"2"}}>{this.props.nickname}</h3>
           
            </div>
            <div className="Body">
                <AvatarImg src={this.props.avatarImgSrc} size="Small" shape="Round"/>
                <MessageText messageText={this.props.msg}/>
            </div>
        </div> */}
        <div  className={"Message"}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="center"
         
          >
            <h3 style={{order:"2"}}>{this.props.nickname}</h3>
            <AvatarImg src={this.props.avatarImgSrc} size="Small" shape="Round"/>
          </Grid>
          <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="center"
          >
            <MessageText typing={true} messageText={this.props.msg} backgroundColor={backgroundColor}/>
          </Grid>
        </div>
       
    </Grow> 
    </Delayed>
    );
  }
}

export default Message;