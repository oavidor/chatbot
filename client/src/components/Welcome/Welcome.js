import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AvatarsImgs from "../AvatarsImgs/AvatarsImgs";
import Typography from '@material-ui/core/Typography';

import UserContext from '../../context/userContext';

class Welcome extends Component {

    state = {
        avatarImgSrc : '',
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
  justify="space-between"
  alignItems="center"
>
            {/* <h3 style={{textAlign: 'center'}}>Choose nickname and avatar</h3> */}
            <Typography  variant="h6" gutterBottom>
                Choose Nickname and Avatar
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" 
              id="m" autoComplete="off"
              name="nickName"
              onChange={e => this.onTextChange(e)}
              value={this.state.nickName}
            />
            <AvatarsImgs chooseAvatar={(event)=>{this.chooseAvatar(event)}} />
            <Button
                variant="contained"
                color="primary"
                onClick={this.enterChat}
                >
                sign
                </Button>
        </Grid>
    );
  }
}

export default Welcome;