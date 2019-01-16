import {Auth} from 'aws-amplify';

export const isAuthenticated = async ()=> {
  try {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: true
    });
    return user;
  } catch {
    return null;
  }
};
