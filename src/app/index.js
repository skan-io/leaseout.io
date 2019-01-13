import React from 'react';
import Oidc from '../signin';
import AppLayout from '../app-layout';


export const App = ()=> (
  <section style={{width: '100%', height: '100%'}}>
    <Oidc />
    <AppLayout />
  </section>
);

export default App;
