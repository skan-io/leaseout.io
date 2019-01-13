import React from 'react';
import checklist from '../../checklist.png';
import signature from '../../signature.png';
import photo from '../../photo.png';
import timeline from '../../timeline3.png';
import homes from '../../homes.png';
import './theme.scss';


const Illustrations = ()=> (
  <section className='illustrations-mainSection'>
    <div className='illustrations-mainContainer'>
      <div className='illustrations-tablet'>
        <img className='illustrations-tabletImg' src={checklist} />
      </div>
      <div className='illustrations-tablet2'>
        <img className='illustrations-tabletImg2' src={signature} />
      </div>
      <div className='illustrations-phone'>
        <img className='illustrations-phoneImg' src={photo} />
      </div>
      <div className='illustrations-phone2'>
        <img className='illustrations-phoneImg2' src={homes} />
      </div>
    </div>
  </section>
);

export default Illustrations;
