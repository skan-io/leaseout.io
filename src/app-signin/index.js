import React, {Fragment} from 'react';
import SigninModal from '../signin/modal';
import Spinner from 'react-spinkit';


export const AppSignin = ()=> (
  <Fragment>
    <div>
      <Spinner name="cube-grid" color="#5e72e4" />
      <span>
        ...signing you in!
      </span>
    </div>
    <SigninModal />
  </Fragment>
);

export default AppSignin;
