import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/es/Typography/Typography';

class Visit extends Component {

  componentDidMount() {
    document.getElementById("page_title").innerHTML = this.props.labels.page_title;

  }

  render() {

    return (

      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography> Comes soon...?</Typography>
        </Grid>
      </Grid>
    );
  }
}

Visit.propTypes = {
  labels : PropTypes.object.isRequired,
};

export default Visit;