import React from 'react';
import SignupNav from '../navbar/signin';
import SignupFooter from '../footers/signin';
import SignupForm from './form';
import './theme.scss';


const Signup = ({location})=> (
  <div className="bg-default signin-Background">
    <div className="main-content">
      <SignupNav signin={false} />
      <div className="header bg-gradient-primary py-7 py-lg-8">
        <div className="container">
          <div className="header-body text-center mb-7">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6">
                <h1 className="text-white">Welcome!</h1>
                <p
                  className="text-lead text-light"
                >
                Sign up to LeaseGenius to start managing your lease.
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
        <SignupForm location={location} />
      </div>
    </div>
    <SignupFooter />
  </div>
);

export default Signup;
