import React from 'react';
import './theme.scss';


const LandingFooter = ()=> (
  <footer className="py-5 landing-footer" id="footer-main">
    <div className="container">
      <div className="row align-items-center justify-content-xl-between">
        <div className="col-xl-6">
          <div className="copyright text-center text-xl-left text-muted">
            © 2019 <a href="/" className="font-weight-bold ml-1">
            LeasePlease.com
            </a>
          </div>
        </div>
        <div className="col-xl-6">
          <ul
            className="nav nav-footer justify-content-center justify-content-xl-end"
          >
            <li className="nav-item">
              <a href="/support" className="nav-link">Support</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/api" className="nav-link">API Integrations</a>
            </li>
            <li className="nav-item">
              <a href="/resources" className="nav-link">Tenancy Resources</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
