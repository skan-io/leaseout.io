import React, {Fragment} from 'react';
import NavBar from '../../navbar';
import LandingAppLayout from '../../app-layout/landing';


export const LandingApp = ()=> (
  <Fragment>
    <NavBar landing={true} />
    <LandingAppLayout />
  </Fragment>
);

export default LandingApp;
