import {sessionService} from 'redux-react-session';


export const userSignin = (claims, accessToken)=> (dispatch)=> {
  console.log({claims, accessToken});
};

export const userSignout = ()=> ({
  type: 'user/sign-out'
});
