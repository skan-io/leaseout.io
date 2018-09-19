import React from 'react';
import HomeChart from './chart';
import Properties from '../properties';
import Button from 'rambler-ui/Button';
import {AddIcon} from 'rambler-ui/icons/forms'
import theme from './theme.css';


const Home = ()=> (
  <div>
    <header>
    </header>
    <section className={theme.homeChartSection}>
      <Button className={theme.headerButton} icon={<AddIcon />} iconPosition='right' style={{margin: 20}} rounded={true}>ADD A NEW PROPERTY</Button>
      <HomeChart />
    </section>
    <section>
      <Properties />
    </section>
  </div>
);

export default Home;
