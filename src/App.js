import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Routes from './Routes';
import {connect} from "react-redux";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="content">
          <Menu className='side-menu' />
          <div className='site-content'>
            <Routes />
          </div>
        </div>
      </div>);
  }
}

export default withRouter(connect()(App))
