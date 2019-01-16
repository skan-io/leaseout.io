import React from 'react';
import SigninNav from '../navbar/signin';
import SigninFooter from '../footers/signin';
import SigninForm from './form';
import favicon from '../favicon.png';
import './theme.scss';


const Signup = ({location})=> (
  <div className="bg-default signin-Background">
    <div className="main-content">
      <SigninNav signin={true} />
      <div className="header bg-gradient-primary py-7 py-lg-8">
        <div className="container">
          <div className="header-body text-center mb-7">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6">
                <img src={favicon} width="120" />
                <p
                  className="text-lead text-light"
                >
                Sign in to see your lease profile.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon
              className="fill-default"
              points="2560 0 2560 100 0 100"
            >
            </polygon>
          </svg>
        </div>
      </div>
      <div className="container mt--8 pb-5">
        <SigninForm location={location} />
      </div>
    </div>
    <SigninFooter />
  </div>
);

export default Signup;
