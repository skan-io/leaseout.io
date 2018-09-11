import React from 'react';
import NavBar from '../nav';
import theme from './theme.css';

const App = ()=> (
  <div>
    <NavBar />
    <header>
      <div className={theme.background}></div>
      <h1>Header Content</h1>
    </header>

    <section>
      <h1>Section Content</h1>
    </section>
  </div>

);

export default App;
