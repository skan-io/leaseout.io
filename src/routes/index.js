import React, {Fragment} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Private from './private';
import history from '../history';
import NavBar from '../navbar';

// Routes
import Login from './login';
import Logout from './logout';
import LandingApp from '../app/landing';
import UserApp from '../app/user';


const Routes = ()=> (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
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
