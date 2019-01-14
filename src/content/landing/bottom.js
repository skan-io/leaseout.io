import React from 'react';
import {Button} from 'reactstrap';
import QuoteCarousel from './quote';
import './theme.scss';


const BottomContent = ()=> (
  <div className={'bottom-main'}>
    <h2 className={'bottom-heading'}>
      <i className='ni ni-check-bold' />
      &nbsp; FAIRNESS FIRST
    </h2>
    <h3 className={'bottom-text'}> At LeasePlease we aim to keep the tenancy process
    as fair as possible for all.  We allow anyone negotating a lease to view each
    others leasing history.  We offer a review system, which is available only to those
    involved in the lease agreement to provide a transparent negotiation for
    both the leasor and leasee.  Not to worry we have developed this review system
    especially so no one can spread rumours.
    </h3>
    <QuoteCarousel />
    <Button
      className={'bottom-button'}
      outline
      color='primary'
    >
    See an example lease history
    </Button>
  </div>
);

export default BottomContent;
