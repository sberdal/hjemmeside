import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import ChessBoard from '.././games/playChess/Chess';

class Chess extends Component {

  componentDidMount(){
    document.getElementById("page_title").innerHTML = this.props.labels.page_title;
  }

  render() {
    return (

        <Grid container spacing={16}>
          <Grid item xs={12}>
            <ChessBoard labels={this.props.labels}/>
          </Grid>

        </Grid>
    );
  }
}

Chess.propTypes = {
  labels : PropTypes.object.isRequired,
};

export default Chess;