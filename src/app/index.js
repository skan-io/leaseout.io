import React from 'react';
import Amplify from 'aws-amplify';
import Routes from '../routes';
import config from '../aws-exports';


Amplify.configure(config);


export const App = ()=> (
  <section
    style={{
      width: '100%',
      height: '100%',
      overflow: 'inherit',
      position: 'absolute'
    }}
  >
    <Routes />
  </section>
);

export default App;
