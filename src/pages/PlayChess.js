import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import ChessBoard from 'chessboardjsx';
import Chess from '../games/Chess';

class PlayChess extends Component {


  componentDidMount() {
    document.getElementById("page_title").innerHTML = this.props.labels.page_title;
  }

  render() {
    return (

      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Chess />
        </Grid>
        <Grid item xs={2}>
          <Button variant={'raised'} color={'primary'}>Start</Button>
          <Button variant={'raised'} color={'secondary'} onClick={() => {}}>Undo move</Button>
        </Grid>
      </Grid>
    );
  }
}

PlayChess.propTypes = {
  labels : PropTypes.object.isRequired,
};

export default PlayChess;