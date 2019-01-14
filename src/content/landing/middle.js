import React from 'react';
import {Button} from 'reactstrap';
import './theme.scss';


const MiddleContent = ()=> (
  <div className={'middle-main'}>
    <h2 className={'middle-heading'}>
      <i className='ni ni-archive-2' />
      &nbsp; THE COMPLETE PACKAGE FOR ALL PARTIES
    </h2>
    <h3 className={'middle-text'}> LeasePlease has an easy-to-use toolkit for landlords, agents and tenants.
      Easily create a new lease agreement, add people to it or request to have people
      removed.  Your lease agreement can then be easily prepared with an online condition report, verified
      photos, online document signatures and a dated timeline.
      Tenants and landlords can log on any time through mobile or web and agents can simply integrate LeasePlease
      into your in-house management system or workflow through a set of APIs.
    </h3>
    <Button
      className={'middle-button'}
      outline
      color='primary'
    >
    Discover how to create a new lease
    </Button>
  </div>
);

export default MiddleContent;
