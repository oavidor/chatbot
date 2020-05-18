import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AvatarsImgs from "../AvatarsImgs/AvatarsImgs";
import Typography from '@material-ui/core/Typography';

import UserContext from '../../context/userContext';

class Welcome extends Component {

    state = {
        avatarImgSrc : '/assets/avatars/avatar2.png',
        nickName: ''
    }

    onTextChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    chooseAvatar = (event) => {
        this.setState({ avatarImgSrc: event.target.currentSrc });
    };

    enterChat = () => {
        this.props.openDialog({avatarImgSrc: this.state.avatarImgSrc, nickName: this.state.nickName});
    };

  render() {
    return (
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          style={{ marginTop: "3em", height:"400px"}}
          // spacing={3}
          >
             <Typography  variant="h3" gutterBottom>
                Welcome!
            </Typography>
            <Typography  variant="body1" gutterBottom>
                Choose Nickname and Avatar
            </Typography>
            <TextField id="nickName" label="Nick Name" variant="outlined" 
              name="nickName"
              onChange={e => this.onTextChange(e)}
              value={this.state.nickName}
              // style={{marginTop: "1em", marginBottom: "1em"}}
            />
            <AvatarsImgs chooseAvatar={(event)=>{this.chooseAvatar(event)}}/>
            <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={this.enterChat}
                style={{ padding: "0.5em 7em", borderRadius: "8px"}}
                >
                sign
                </Button>
        </Grid>
    );
  }
}

export default Welcome;