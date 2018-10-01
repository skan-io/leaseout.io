import React from 'react';
import {Button} from 'semantic-ui-react';
import {Line} from 'react-chartjs-2';
import theme from './theme.css';


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Rental Income',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // eslint-disable-next-line no-magic-numbers
      data: [550, 1100, 430, 550, 550, 275, 1100]
    }, {
      label: 'Costs',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(247, 68, 44, 1)',
      borderColor: 'rgba(247, 68, 44, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(247, 68, 44, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(247, 68, 44, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // eslint-disable-next-line no-magic-numbers
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Total Income',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(33, 133, 208, 1)',
      borderColor: 'rgba(33, 133, 208, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(33, 133, 208, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(33, 133, 208, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // eslint-disable-next-line no-magic-numbers
      data: [485, 1041, 350, 469, 494, 220, 1060]
    }
  ]
};

const options = {
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }],
    yAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }]
  }
};


const HomeChart = ()=> (
  <div className={theme.homeChart}>
    <Line data={data} options={options} />
  </div>
);


export default HomeChart;
