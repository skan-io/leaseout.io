import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Private = ({location, isAuthenticated, component: Component, ...props})=> (
  isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/signin',
        state: {from: location}
      }}
    />
  )
);
Private.propTypes = {
  location: PropTypes.object,
  component: PropTypes.any
};

const mapStateToProps = ({auth})=> ({
  isAuthenticated: auth.authentication === 'authenticated'
});

export default connect(mapStateToProps)(Private);
