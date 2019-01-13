import {combineReducers} from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive';
import focus from 'refocus/reducer';
import device from './device-info/reducer';
import user from './user/reducer';
import auth from './auth/reducer';
import navbar from './navbar/reducer';

const browser = createResponsiveStateReducer(
  {extraSmall: 480, small: 767, medium: 992, large: 1200}
);

export default combineReducers({
  browser,
  focus,
  auth,
  user,
  device,
  navbar
});
