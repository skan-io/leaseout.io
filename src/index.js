import React from 'react';
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {ApplyTheme} from 'rambler-ui/theme';
import App from './app';
import {document} from './globals';
import {store} from './store';
import './index.css';


// https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin();

document.documentElement.addEventListener('touchstart', (event)=> {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);

ReactDOM.render(
  <Provider store={store}>
    <ApplyTheme>
      <App />
    </ApplyTheme>
  </Provider>,
  document.getElementById('leazy')
);
