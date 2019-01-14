import React from 'react';
import Middle from './middle';
import Bottom from './bottom';
import Footer from './footer';
import century from '../../logos/century21.png';
import ls from '../../logos/ls.png';
import domain from '../../logos/domain.png';
import rea from '../../logos/rea.png';
import './theme.scss';


const LandingContent = ()=> (
  <div className='landingContent-main'>
    <Middle />
    <div className='landingContent-brandPartners'>
      <img className='landingContent-brandCentury' src={century} width='130' />
      <img className='landingContent-brandLS' src={ls} width='250' />
      <img className='landingContent-brandREA' src={rea} width='70' />
      <img className='landingContent-brandDomain' src={domain} width='200' />
    </div>
    <Bottom />
    <section className='landingContent-skewSection' />
    <section className='landingContent-flatSection2' />
    <Footer />
  </div>
);

export default LandingContent;
