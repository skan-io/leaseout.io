import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './app';
import {document} from './globals';
import {store} from './store';

// Global css
// import './fonts/fontawesome/all.min.css';
import './index.scss';
import './fonts/nucleo/css/nucleo.css';
import './scss/argon.scss';


document.documentElement.addEventListener('touchstart', (event)=> {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
