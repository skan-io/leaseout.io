import React from 'react';


const SignupFooter = ()=> (
  <footer className="py-5">
    <div className="container">
      <div className="row align-items-center justify-content-xl-between">
        <div className="col-xl-6">
          <div className="copyright text-center text-xl-left text-muted">
            &copy; 2019
            <a href="/" className="font-weight-bold ml-1">LeaseGenius.com.au</a>
          </div>
        </div>
        <div className="col-xl-6">
          <ul
            // eslint-disable-next-line
            className="nav nav-footer justify-content-center justify-content-xl-end"
          >
            <li className="nav-item">
              <a href="https://www.creative-tim.com/presentation" className="nav-link">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default SignupFooter;
