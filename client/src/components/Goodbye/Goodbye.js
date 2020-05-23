import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Goodbye.css';

class Goodbye extends Component {

  enterChat = () => {
    this.props.openChat({avatarImgSrc: this.props.avatarImgSrc, nickName: this.props.nickName});
};

  render() {
    return (
        <div >
        <Grid
        className="goodbye"
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          style={{ marginTop: "3em", height:"400px"}}>
             <Typography  variant="h3">
                Goodbye!
            </Typography>
            <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={this.enterChat}
                style={{ padding: "0.5em 7em", borderRadius: "8px"}}>
                back
                </Button>
        </Grid>
        </div>      
    );
  }
}

export default Goodbye;