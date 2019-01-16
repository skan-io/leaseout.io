import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Private from './private';
import history from '../history';

// Routes
import Signup from '../signup';
import Signin from '../signin';
import Signout from '../signout';
import PrivacyPolicy from '../privacy';
import LandingApp from '../app/landing';
import UserApp from '../app/user';


const Routes = ()=> (
  <Router history={history}>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/signout" component={Signout} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route
        exact
        path="/"
        render={(props)=> <LandingApp {...props} />}
      />
      <Private
        exact
        path="/profile"
        component={UserApp}
      />
    </Switch>
  </Router>
);

export default Routes;
