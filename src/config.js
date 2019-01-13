
// Auth0 authority
export const authority = 'https://leaseplease.au.auth0.com/authorize';

// Auth0 client ID
export const clientId = '5UWbdF4RA0D4t4XUy0cFWnt954oXcu94';

// Auth0 domain
export const authDomain = 'leaseplease.au.auth0.com';

// Auth0 redirect
export const authRedirect = 'http://localhost:8080/callback';

// Auth0 response type
export const authResponseType = 'token id_token';

// Auth0 scope
export const authScope = 'openid';

export const AUTH_CONFIG = {
  domain: authDomain,
  clientId,
  container: 'auth0-login-container',
  responseType: authResponseType,
  scope: authScope
  // callback: authRedirect
};
