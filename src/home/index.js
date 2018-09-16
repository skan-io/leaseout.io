import React from 'react';
import HomeChart from './chart';
import Properties from '../properties';
import theme from './theme.css';


const Home = ()=> (
  <div>
    <header />
    <section className={theme.homeChartSection}>
      <HomeChart />
    </section>
    <section>
      <Properties />
    </section>
  </div>
);

export default Home;
