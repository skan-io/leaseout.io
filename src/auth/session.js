import {Auth} from 'aws-amplify';
import {localStorage} from '../globals';


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


export const deleteSession = (id)=> {
  localStorage.removeItem(id);
}

export const getSession = (id)=>
  JSON.parse(localStorage.getItem(id));

export const setSessionVariable = (id, field, variable)=> {
  const prev = JSON.parse(localStorage.getItem(id));
  localStorage.setItem(
    id,
    JSON.stringify({
      ...prev,
      [field]: variable
    })
  );
}

export const getSessionVariable = (id, field)=> {
  const session = JSON.parse(localStorage.getItem(id));

  if (session) {
    return session[field];
  }

  return null;
}
