import React from 'react';
import NavBar from '../nav';
import theme from './theme.css';

import HomeChart from './chart';

const App = ()=> (
  <div>
    <NavBar />
    <header />

    <section className={theme.homeChartSection}>
      <HomeChart />
    </section>
  </div>

);

export default App;
