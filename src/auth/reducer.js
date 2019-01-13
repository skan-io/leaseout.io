import reducer from '../utils/reducer';

export const DefaultState = {
  requestLogin: false
};

export default reducer(DefaultState, {
  'auth/request-login': (state)=> ({
    ...state,
    requestLogin: !state.requestLogin
  })
});
