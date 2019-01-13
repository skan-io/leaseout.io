import reducer from '../utils/reducer';

export const DefaultState = {
  signedIn: false
};

export default reducer(DefaultState, {
  'user/sign-in': (state)=> ({
    ...state,
    signedIn: true,
    requestSignIn: false
  }),

  'user/sign-out': (state)=> ({
    ...state,
    signedIn: false,
    requestSignIn: true
  })
});
