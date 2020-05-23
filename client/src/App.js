import React, { Component } from "react";
import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom';
import FullScreenDialog from "./components/Dialog/FullScreenDialog";

//todo-ortal move to header
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AvatarImg from './components/AvatarImg/AvatarImg';

import Welcome from './components/Welcome/Welcome';


import Slide from '@material-ui/core/Slide';

//todo-ortal move?
import DialogContent from '@material-ui/core/DialogContent';


class App extends Component {

  state = {
    openDialog : false,
    avatarImgSrc : '/assets/avatars/avatar2.png',
    nickName: 'Guest'
  }

  closeDialog = () => {
    this.setState({
        openDialog: false
    })
  };

  openDialog = (user) => { //todo-ortal //change to open chat

      this.setState({
          openDialog: true, avatarImgSrc: user.avatarImgSrc,  nickName: user.nickName
      })
  };

  render() {
    return (
      <div style={{minWidth: "320px"}}>
      <div>
      <AppBar  position="fixed">
      <Toolbar style={{textAlign:"center"}}>
      <AvatarImg src={'/assets/bot_avatar.png'} size="Small" shape="Round"/>
        <Typography  variant="h6" noWrap style={{textAlign:"center"}}>
          Zoey Chat Bot
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
    <DialogContent>
      <Welcome openDialog={(user)=>{this.openDialog(user)}} />
    <FullScreenDialog   onClose={this.closeDialog}  open={this.state.openDialog} >
      <ChatRoom  
        user={{avatarImgSrc: this.state.avatarImgSrc,  nickName: this.state.nickName}}
        />
    </FullScreenDialog>
    </DialogContent> 
      </div>
      </div>
    );
  }
}

export default App;



  {/* <AppBar  position="fixed">
        <Toolbar>
          <AvatarImg src="/assets/bot_avatar.png" size="Small" shape="Round" />
          <Typography  variant="h6" noWrap>
            Chat Room
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
          <ChatRoom />
      </DialogContent> */}