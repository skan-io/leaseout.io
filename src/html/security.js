/* global URL */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {lineBreaksToSpaces} from '../utils/strings';

const isDevelopment = (appUrl)=> {
  const url = new URL(appUrl);
  return (url.hostname === 'localhost'
    || url.hostname === 'apps.skandev.io');
};

const SecurityMeta = ({appUrl})=> (
  <Fragment>
    <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
    <meta httpEquiv="X-XSS-Protection" content="1" />

    // <meta
    //   httpEquiv="Content-Security-Policy"
    //   content={lineBreaksToSpaces`
    //     default-src
    //      'self'
    //       ws:
    //       *.leasegenius.com.au
    //       *.auth0.com
    //       ${isDevelopment(appUrl) ? '*.leasegenius.com.au' : ''};
    //     script-src
    //       'self'
    //       'unsafe-inline'
    //       www.google-analytics.com
    //     img-src
    //       'self'
    //       blob:
    //       data:
    //       *.leasegenius.com.au
    //       *.auth0.com
    //       www.google-analytics.com
    //     style-src 'self' 'unsafe-inline' fonts.googleapis.com;
    //     font-src 'self' fonts.gstatic.com;
    //   `}
    />
  </Fragment>
);

SecurityMeta.propTypes = {
  appUrl: PropTypes.string
};

export default SecurityMeta;
