import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {responsiveStoreEnhancer} from 'redux-responsive';
import {createLogger} from 'redux-logger';
import focusEnhancer from 'refocus/enhancer';
import {window} from './globals';
import promiseMiddleware from './middlewares/promise';
import reducers from './reducers';


const loggerMiddleware = createLogger();


function getReduxDevTools() {
  const {devToolsExtension} = window;
  let enhancer = (arg)=> arg;

  /* istanbul ignore if */
  if (typeof devToolsExtension === 'function') {
    enhancer = devToolsExtension();
  }
  return enhancer;
}


const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  compose(
    responsiveStoreEnhancer,
    focusEnhancer,
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware,
      loggerMiddleware,
    ),
    getReduxDevTools()
  )
);
