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

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const {labels} = this.props;
    return (
      <div className="main-container">
        <div className="content">
          <Menu className='side-menu' auth={this.props.auth} labels={labels.labels.menu}/>
          <div className='site-content' id={'siteContent'} >
            <Routes/>
          </div>
        </div>
      </div>);
  }
}

export default withRouter(connect()(App))
