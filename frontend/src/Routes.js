import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from './pages/Home';
import PlayChess from './pages/PlayChess';
import labels from './i18n/labels';
import PageNotFound from './common/components/PageNotFound';
import WelcomePage from './common/components/WelcomePage';
import {auth, handleAuthentication} from './index';
import Callback from './Callback/Callback';
import Profile from './pages/Profile';
import Travel from './pages/Travel';




export default () => (

  <React.Fragment>
    <Switch>
      <Route exact path="/" render={(props) => <WelcomePage  auth={auth} labels={labels.labels.welcome_page} {...props} />} />

      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback auth={auth} {...props} />
      }}/>

      <Route
        path="/profile"
        render={props =>
          !auth.isAuthenticated()
          ? <Redirect to="/home" />
          : <Profile auth={auth} {...props} />}
      />

      <Route path="/home" render={(props) => <Home auth={auth} labels={labels.labels.home} {...props} />} />
      <Route path="/chess" render={(props) => <PlayChess auth={auth} labels={labels.labels.chess} {...props} />} />
      <Route path="/travel" render={(props) => <Travel auth={auth} labels={labels.labels.chess} {...props} />} />

      <Route path="/**" render={(props) => <PageNotFound auth={auth} labels={labels.labels.page_not_found} {...props} />} />
    </Switch>
  </React.Fragment>
);