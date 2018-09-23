import React, {Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import DesktopApp from '../app-layout/desktop';
import MobileApp from '../app-layout/mobile';


const App = ()=> (
  <Router>
    <Fragment>
      <DesktopApp />
      <MobileApp />
    </Fragment>
  </Router>
);


export default App;
