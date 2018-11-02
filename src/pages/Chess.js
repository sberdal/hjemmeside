import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Chess extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("Howdy");
    console.log(this.props);
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography>
            test
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Chess;