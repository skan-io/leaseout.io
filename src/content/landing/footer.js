import React from 'react';
import {Button} from 'reactstrap';
import StateEmblems from './emblems';
import './theme.scss';


const BottomContent = ()=> (
  <div className={'footer-main'}>
    <h2 className={'footer-heading'}>
      <i className='ni ni-key-25' />
      &nbsp; DOCUMENT SECURITY AND COMPLIANCE
    </h2>
    <h3 className={'footer-text'}> No more need to go searching for lost documentats or
    old photos.  No need to worry about awkwardly asking a tennant or agent to produce
    some evidence you might need.  All your documents, photo and written evidence
    and signatures are kept securely on our servers so that only you can see or
    share your history.  All verified condition reports and documents are
    in compliance on a state by state basis, so no need to worry yourself with
    regulation details.
    </h3>
    <StateEmblems />
    <Button
      className={'footer-button'}
      outline
      color='primary'
    >
    See an example condition report
    </Button>
  </div>
);

export default BottomContent;
