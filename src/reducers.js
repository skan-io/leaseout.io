import {combineReducers} from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive';
import focusReducer from 'refocus/reducer';


export default combineReducers({
  focus: focusReducer,
  browser: createResponsiveStateReducer({
    extraSmall: 480,
    small: 767,
    medium: 992,
    large: 1200
  })
});
