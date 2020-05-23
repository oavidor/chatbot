import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Fade from '@material-ui/core/Fade';
import Header from '../Header/Header';
import Grow from '@material-ui/core/Grow';

const TransitionSlide = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} timeout={500}/>;
});

const TransitionFade = React.forwardRef(function Transition(props, ref) {
    return <Grow direction="up" ref={ref} {...props} timeout={300}/>;
});

export default class FullScreenDialog extends Component {

    state = {
        transition : TransitionSlide
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        if(window.innerWidth > 760){
            this.setState({transition: TransitionFade});
        }
    }

    handleClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    render() { 
        return (
            <div>
                <Dialog
                    fullScreen
                    open={this.props.open}
                    TransitionComponent={this.state.transition}
                    keepMounted
                    >
                    <Header title="Chat Room" closeBtn handleClose={this.handleClose}/>
                    <Toolbar />
                    <DialogContent>
                        {this.props.children}
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
  
}