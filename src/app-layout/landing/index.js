import React, {Fragment} from 'react';
import LandingHeader from '../../headers/landing';
import LandingContent from '../../content/landing';
import LandingFooter from '../../footers/landing';


const LandingAppLayout = ()=> (
  <Fragment>
    <LandingHeader />
    <LandingContent />
    <LandingFooter />
  </Fragment>
);

export default LandingAppLayout;
