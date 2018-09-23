import {combineReducers} from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive';
import focusReducer from 'refocus/reducer';

// Application data reducers
import deviceInfoReducer from './devices/reducer';
import userReducer from './user/reducer';
import propertiesReducer from './properties/reducer';


export default combineReducers({
  focus: focusReducer,
  browser: createResponsiveStateReducer({
    extraSmall: 480,
    small: 767,
    medium: 992,
    large: 1200
  }),
  device: deviceInfoReducer,

  // Application data reducers
  user: userReducer,
  properties: propertiesReducer
});
