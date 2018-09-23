import React from 'react';
import Iphone8 from '../devices/iphone-8';
import theme from './theme.css';


const Header = ()=> (
  <header>
    <div className={theme.stripes}>
      <span className={theme.firstStripe}></span>
      <span className={theme.secondStripe}></span>
      <span className={theme.thirdStripe}></span>
      <span className={theme.fourthStripe}></span>
      <span className={theme.fifthStripe}></span>
    </div>
    <section className={theme.intro}>
      <div className={theme.introContent}>
        <h1 className={theme.introTitle}>
          The new way to manage your property
        </h1>
        <br></br>
        <p>Leasout.io provides a free and easy service for tenants and landlords
           to keep track of condition reports, damaged assets, bills and rent.
           Keep timestamped evidence, conformant reports and simple logs.
        </p>
      </div>
      <div className={theme.iphoneContainer}>
        <Iphone8 />
      </div>
    </section>
  </header>
);

export default Header;
