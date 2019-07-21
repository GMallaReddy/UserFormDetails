import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h2>Thank You for Your Submission...</h2>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default Success;
