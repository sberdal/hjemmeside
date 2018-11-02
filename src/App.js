import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Menu className='menu' />
          <div className='content'>
            <div className="site-content">
              <Routes/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
