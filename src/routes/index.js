import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from './private';

// ROUTES:
import Home from '../home';
import SigninModal from '../signin/modal';


const Routes = ()=> (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/login'} exact component={SigninModal} />
        <PrivateRoute path={'/profile'} exact component={Home} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
