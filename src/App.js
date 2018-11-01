import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Menu />
      </MuiThemeProvider>
    );
  }
}

export default App;
