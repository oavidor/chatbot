import React, { Component } from "react";
import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom';
import FullScreenDialog from "./components/Dialog/FullScreenDialog";
import Toolbar from '@material-ui/core/Toolbar';
import Welcome from './components/Welcome/Welcome';
import Goodbye from './components/Goodbye/Goodbye';
import DialogContent from '@material-ui/core/DialogContent';
import Header from "./components/Header/Header";


class App extends Component {

  state = {
    openChat : false,
    avatarImgSrc : '/assets/avatars/avatar2.png',
    nickName: 'Guest',
    endChat: false
  }

  closeChat = () => {
    this.setState({
        openChat: false,
        endChat: true
    })
  };

  openChat = (user) => {
      this.setState({
          openChat: true, avatarImgSrc: user.avatarImgSrc,  nickName: user.nickName
      })
  };

  render() {
    return (
      <div style={{minWidth: "320px"}}>
        <div>
          <Header title="Chat Bot"/>
          <Toolbar />
          <DialogContent>
            {
              !this.state.endChat ? <Welcome openChat={(user)=>{this.openChat(user)}} />
              : <Goodbye avatarImgSrc={this.state.avatarImgSrc} nickName={this.state.nickName} openChat={(user)=>{this.openChat(user)}}/>
            }
            <FullScreenDialog  onClose={this.closeChat}  open={this.state.openChat} >
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