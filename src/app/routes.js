import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import {createLink} from '../utils/router';

import Home from '../home';

const Routes = ()=> (
  <Fragment>
    <Route
      path={createLink('/')}
      exact={true}
      component={Home}
    />
  </Fragment>
);

export default Routes;
