import React from 'react';
import {Badge, Button} from 'reactstrap';
import './theme.scss';


const Intro = ()=> (
  <section className='intro-mainSection'>
    <div className='intro-mainContainer'>
      <div className='intro-badgeDiv'>
        <Badge className='intro-badge' color="secondary">New</Badge>
        <a href='/wizard' className='intro-badge intro-badgeText'>
        All new lease wizard, including photos and signatures
        </a>
      </div>
      <h1 className='display-3 intro-mainHeading'>
        The new way to manage your lease
      </h1>
      <h3 className='intro-introText'>
        LeasePlease is the best software platform for managing, maintaining and
        processing leases.  We handle all parts of the lease process for you,
        including documents, photos, signatures and tracking timeline.
      </h3>
      <Button
        href='/signup'
        className='intro-introButton' color="success">GET STARTED
      </Button>
    </div>
  </section>
);

export default Intro;
