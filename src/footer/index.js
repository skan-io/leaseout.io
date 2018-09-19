import React from 'react';
import PropTypes from 'prop-types';
import {H1, H3, Source} from 'rambler-ui/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';
import theme from './theme.css';


const Footer = ()=> (
  <footer className={theme.footerDistributed}>
    <div className={theme.footerRight}>
      <a href="#">
        <FontAwesomeIcon className={theme.footIcon} icon={faGithub} />
      </a>
      <a href="#">
        <FontAwesomeIcon className={theme.footIcon} icon={faFacebook} />
      </a>
      <a href="#">
        <FontAwesomeIcon className={theme.footIcon} icon={faGoogle} />
      </a>
      <a href="#">
        <FontAwesomeIcon className={theme.footIcon} icon={faTwitter} />
      </a>

    </div>
    <div className={theme.footerLeft}>
      <p className={theme.footerLinks}>
        <a className={theme.linkOne} href="#"><H3> About</H3></a>
        <a href="#"><H3> About</H3></a>
        <a href="#"><H3> About</H3></a>
        <a href="#"><H3> About</H3></a>
      </p>
      <b><Source>Leasout.io &copy; 2018</Source></b>
    </div>
  </footer>
);

export default Footer;
