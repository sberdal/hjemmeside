import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Chess from './pages/Chess';
import App from './App';


export default () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/home" component={Home}/>
      <Route path="/chess" component={Chess}/>
    </Switch>
  </React.Fragment>
);