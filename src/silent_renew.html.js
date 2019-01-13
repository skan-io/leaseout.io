import React from 'react';
import {Module, Scripts} from 'react-entry-loader/injectors';

/* eslint react/prop-types: off */

const Html = ({scripts})=> (
  <html>
    <head>
      <title>OpenID-connect token renew</title>
      <Scripts files={scripts} />
    </head>
    <body>
      <Module onLoad={()=> null} />
    </body>
  </html>
);

export default Html;
