import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './app';
import {document} from './globals';
import {store} from './store';
import 'semantic-ui-css/semantic.min.css';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('leazy')
);
