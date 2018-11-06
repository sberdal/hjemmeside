import "./Chess.css";
import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';

const labelStyles = { fontSize : 'calc(7px + .5vw)', position : 'absolute', userSelect : 'none' };
const yLabelStyles = Object.assign({ justify:'center', left : '5%' }, labelStyles);
const xLabelStyles = Object.assign({ bottom : '0%', right : '45%' }, labelStyles);

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
    let boardSize = (windowWidth + windowHeight) * 0.2;
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
    const yLabels = [];
    const xLabels = [];
    const squareStyle = {
      width : this.state.tileSize,
      height : this.state.tileSize
    };

    const lastSquareInRowStyle = {
      width : this.state.tileSize,
      height : this.state.tileSize,
      clear : 'left'
    };

    const ylabelStyle = {
      width : this.state.tileSize,
      height : this.state.tileSize,
      float : 'right',
      textAlign: 'center',
      lineHeight: '350%'

    };

    const xlabelStyle = {
      width : this.state.tileSize,
      height : this.state.tileSize,
      float: 'left',
      textAlign: 'center',
      lineHeight: '350%'
    };

    const xFirst = {
      clear : 'left'
    };

    for (let y = 0; y < this.state.tiles; y++) {
      for (let x = 0; x < this.state.tiles; x++) {
        let background = this.getSquareColor(y, x);
        if (x === 0) {
          tiles.push(
            <div key={'square-${y}-${x}'} class={'square ' + background} style={lastSquareInRowStyle}/>);
        } else {
          tiles.push(
            <div key={'square-${y}-${x}'} class={'square ' + background} style={squareStyle}/>);
        }
      }
      yLabels.push(<span style={ylabelStyle}>{this.state.tiles - y}</span>);

      if(y === 0) {
        xLabels.push(<span style={{...xlabelStyle, ...xFirst}}>{String.fromCharCode(65 + y)}</span>);
      } else {
        xLabels.push(<span style={xlabelStyle}>{String.fromCharCode(65 + y)}</span>);
      }
    }


const boardStyle = { position : 'relative', display: 'inline-block', overflow : 'hidden', height : (this.state.boardSize + this.state.tileSize), width: this.state.boardSize};

return (
  <div className={"chess-board"}>
    <Grid container spacing={1}>
      <Grid item xs={1}>
        {yLabels}
      </Grid>

      <Grid item xs={10} style={boardStyle}>
        {tiles}
        {xLabels}
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