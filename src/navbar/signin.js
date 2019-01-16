import React from 'react';
import favicon from '../favicon.png';

const SignupNav = ({signin})=> (
  <nav
    className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark"
  >
    <div className="container px-4">
      <a className="navbar-brand" href="/">
        <img src={favicon} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-collapse-main"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-collapse-main">
        <div className="navbar-collapse-header d-md-none">
          <div className="row">
            <div className="col-6 collapse-brand">
              <a href="/">
                <img src={favicon} />
              </a>
            </div>
            <div className="col-6 collapse-close">
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbar-collapse-main"
                aria-controls="sidenav-main"
                aria-expanded="false"
                aria-label="Toggle sidenav"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link nav-link-icon" href="/">
              <i className="ni ni-planet"></i>
              <span className="nav-link-inner--text">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-link-icon"
              href={signin ? '/signup' : '/signin'}
            >
              <i className="ni ni-key-25"></i>
              <span className="nav-link-inner--text">
                {signin ? 'Register' : 'Login'}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default SignupNav;
