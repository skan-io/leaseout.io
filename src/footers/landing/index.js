import React from 'react';
import './theme.scss';


const LandingFooter = ()=> (
    <footer className="py-5 landing-footer" id="footer-main">
    <div className="container">
      <div className="row align-items-center justify-content-xl-between">
        <div className="col-xl-6">
          <div className="copyright text-center text-xl-left text-muted">
            © 2019 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">LeasePlease.com</a>
          </div>
        </div>
        <div className="col-xl-6">
          <ul className="nav nav-footer justify-content-center justify-content-xl-end">
            <li className="nav-item">
              <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Support</a>
            </li>
            <li className="nav-item">
              <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
            </li>
            <li className="nav-item">
              <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">API Integrations</a>
            </li>
            <li className="nav-item">
              <a href="https://www.creative-tim.com/license" className="nav-link" target="_blank">Tenancy Resources</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
