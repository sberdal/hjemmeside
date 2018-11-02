import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Chess from './pages/Chess';
import App from './App';


export default () => (
    <Switch>
      <Route exact path="/home" component={App}/>
      <Route path="/chess" component={Chess}/>
    </Switch>
);