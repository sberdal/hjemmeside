import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/es/Grid/Grid';

class WelcomePage extends Component {

  componentDidMount() {
    document.getElementById("page_title").innerHTML = "Sondre's hub"
  }

  render() {
    const { labels } = this.props;
    return (
        <Grid container spacing={16}>
          <Grid item xs={12} style={{marginBottom:'3%'}}>
            <Typography variant='h4' color='primary'>
              {labels}
            </Typography>
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={7}>
            <Typography>
              Yolo
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              Song of the moment
            </Typography>
            <iframe src="https://open.spotify.com/embed/track/5wBGm21X54DhlQENf2RAMW"
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowTransparency="true"
                    allow="encrypted-media" />
          </Grid>
        </Grid>
    );
  }
}

WelcomePage.propTypes = {
  labels : PropTypes.object.isRequired,
};

export default WelcomePage;