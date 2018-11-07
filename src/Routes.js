import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import PlayChess from './pages/PlayChess';
import labels from './i18n/labels';
import PageNotFound from './common/components/PageNotFound';
import WelcomePage from './common/components/WelcomePage';



export default () => (

  <React.Fragment>
    <Switch>
      <Route exact path="/" render={(props) => <WelcomePage {...props} labels={labels.labels.welcome_page} />} />

      <Route path="/callback" render={(props) => <Home {...props} labels={labels.labels.home} />} />
      <Route path="/home" render={(props) => <Home {...props} labels={labels.labels.home} />} />
      <Route path="/chess" render={(props) => <PlayChess {...props} labels={labels.labels.chess} />} />


      <Route path="/**" render={(props) => <PageNotFound {...props} labels={labels.labels.page_not_found} />} />
    </Switch>
  </React.Fragment>
);