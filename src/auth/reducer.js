import reducer from '../utils/reducer';
import {AUTH_STATES} from './auth-states';


export const DefaultState = {
  authentication: AUTH_STATES.unauthenticated
};

export default reducer(DefaultState, {
  'auth/set': (state, {value})=> ({
    ...state,
    authentication: value
  })
});
