import React, { PureComponent } from "react";
import { Settings } from "@material-ui/icons";
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Switch,
  Typography,
  Divider
} from "@material-ui/core";
import "./Settings.css";

// TODO: replace local state difficulty level with redux state

export default class Preferences extends PureComponent {
  state = {
    open: false,
    hard: false
  };

  handleSwitch = () => {
    this.setState({
      hard: !this.state.hard
    });
    console.log(this);
  };

  handleModal = async () => {
    await this.setState({
      open: !this.state.open
    });
  };
  render() {
    return (
      <div>
        <IconButton onClick={() => this.handleModal()}>
          <Settings />
        </IconButton>

        {/* TODO: Modal with options */}

        <Dialog onClose={() => this.handleModal()} open={this.state.open}>
          <DialogTitle>Settings</DialogTitle>
          <DialogContent>
            <Divider />
            <DialogContentText component="div">
              <Typography component="div" variant="subheading">
                Difficulty Level
              </Typography>
              <span>Easy</span>
              <Switch
                checked={this.state.hard}
                onChange={() => this.handleSwitch(this)}
                value="Hard"
              />
              <span>Hard</span>
            </DialogContentText>
            <Divider />
            <Typography component="div" variant="subheading">
              Theme -- <i>Coming Soon!</i>
            </Typography>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
