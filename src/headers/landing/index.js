import React from 'react';
import Intro from './intro';
import Illustrations from './illustrations';
import './theme.scss';


const LandingHeader = ()=> (
  <div className={'landingHeader-main'}>
    <div className={'landingHeader-stripes'}>
      <span className={'landingHeader-firstStripe'}></span>
      <span className={'landingHeader-secondStripe'}></span>
      <span className={'landingHeader-thirdStripe'}></span>
      <span className={'landingHeader-fourthStripe'}></span>
      <span className={'landingHeader-fifthStripe'}></span>
    </div>
    <Intro />
    <Illustrations />
  </div>
);

export default LandingHeader;
