import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {isAuthenticated} from '../auth';

const Private = ({location, component: Component, ...props})=> (
  isAuthenticated() ? (
    <Component {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: {from: location}
      }}
    />
  )
);
Private.propTypes = {
  location: PropTypes.object,
  component: PropTypes.any
};

export default Private;
