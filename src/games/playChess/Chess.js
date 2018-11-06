import "./Chess.css";
import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';

class Chess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth : 0,
      windowHeight : 0,
      tiles : 8,
      tileSize : 0,
      boardSize : 0,
      spacing : '16'
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let windowWidth = document.getElementById("siteContent").offsetWidth;
    let windowHeight = document.getElementById("siteContent").offsetHeight;
    let boardSize = windowWidth * 0.6;
    let tileSize = boardSize / this.state.tiles;
    this.setState({ windowWidth, windowHeight, boardSize, tileSize });
  }

  getSquareColor(y, x) {
    const odd = x % 2

    if (y % 2) {
      return odd ? "white" : "black";
    }

    return odd ? "black" : "white";
  }

  render() {
    const { labels } = this.props;
    const tiles = [];
    const squareStyle = {
      width : this.state.tileSize,
      height : this.state.tileSize
    };

    const lastSquareInRowStyle = {
      width : this.state.tileSize,
      height : this.state.tileSize,
      clear: 'left'
    };

    for (let y = 0; y < this.state.tiles; y++) {
      for (let x = 0; x < this.state.tiles; x++) {
        let background = this.getSquareColor(y, x);
        if( x === 0 ){
          tiles.push(<div key={'square-${y}-${x}'} class={'square ' + background} style={lastSquareInRowStyle}></div>);
        } else {
          tiles.push(<div key={'square-${y}-${x}'} class={'square ' + background} style={squareStyle}></div>);
        }
      }
    }

    const boardStyle = {position: 'relative', overflow: 'hidden', width: '100%', height:this.state.boardSize};

    return (
      <div className={"chess-board"}>
        <Grid container spacing={16}>
          <Grid item xs={12} style={boardStyle}>
            {tiles}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Chess.propTypes = {
  labels : PropTypes.object.isRequired,
};

export default Chess;