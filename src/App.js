import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Routes from './Routes';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {labels} = this.props;
    return (
      <div className="main-container">
        <div className="content">
          <Menu className='side-menu' labels={labels}/>
          <div className='site-content'>
            <Routes/>
          </div>
        </div>
      </div>);
  }
}

export default withRouter(connect()(App))
