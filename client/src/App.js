import React, { Component } from "react";
import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom';

//todo-ortal move to header
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AvatarImg from './components/AvatarImg/AvatarImg';

//todo-ortal move?
import DialogContent from '@material-ui/core/DialogContent';

class App extends Component {

  render() {
    return (
      <div style={{minWidth: "320px"}}>
     <AppBar  position="fixed">
        <Toolbar>
          <AvatarImg src="/assets/bot_avatar.png" size="Small" shape="Round" />
          <Typography  variant="h6" noWrap>
            Chat Room
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
          <ChatRoom />
      </DialogContent>
      </div>
    );
  }
}

export default App;