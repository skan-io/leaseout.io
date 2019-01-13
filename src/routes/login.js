import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import AuthLock, {isAuthenticated} from '../auth';


const Login = ({location})=> (
  isAuthenticated() ? (
    <Redirect
      to={{
        pathname: '/profile',
        state: {from: location}
      }}
    />
  ) : (
    <AuthLock location={location} />
  )
);
Login.propTypes = {
  location: PropTypes.object
};

export default Login;
