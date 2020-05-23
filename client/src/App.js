import React, { Component } from "react";
import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom';
import FullScreenDialog from "./components/Dialog/FullScreenDialog";


import Toolbar from '@material-ui/core/Toolbar';

import Welcome from './components/Welcome/Welcome';

//todo-ortal move?
import DialogContent from '@material-ui/core/DialogContent';
import Header from "./components/Header/Header";


class App extends Component {

  state = {
    openDialog : false,
    avatarImgSrc : '/assets/avatars/avatar2.png',
    nickName: 'Guest',
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
          <Header title="Chat Bot"/>
          <Toolbar />
          <DialogContent>
            <Welcome openDialog={(user)=>{this.openDialog(user)}} />
            <FullScreenDialog  onClose={this.closeDialog}  open={this.state.openDialog} >
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