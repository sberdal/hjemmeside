import React, { Component } from 'react';

class Home extends Component {

  componentDidMount(){
    document.getElementById("page_title").innerHTML = this.props.labels.page_title;
  }

  login() {
    this.props.auth.login();
  }
  render() {
    const { labels } = this.props;
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <h4>
              You are logged in!
            </h4>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.login.bind(this)}
              >
                Log In
              </a>
              {' '}to continue.
            </h4>
          )
        }
      </div>
    );
  }
}

export default Home;