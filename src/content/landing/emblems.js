import React from 'react';
import nsw from '../../logos/nsw.png';
import qld from '../../logos/qld.png';
import sa from '../../logos/sa.png';
import wa from '../../logos/wa.png';
import vic from '../../logos/vic.png';
import './theme.scss';


const StateEmblems = ()=> (
  <div className={'stateEmblems-main'}>
    <img
      alt="Image placeholder"
      className="emblem-img"
      src={nsw}
    />
    <img
      alt="Image placeholder"
      className="emblem-img"
      src={qld}
    />
    <img
      alt="Image placeholder"
      className="rounded-circle emblem-img-vic"
      src={vic}
    />
    <img
      alt="Image placeholder"
      className="rounded-circle emblem-img-sa"
      src={sa}
    />
  </div>
);

export default StateEmblems;
