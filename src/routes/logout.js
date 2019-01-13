import React from 'react';
import {Redirect} from 'react-router-dom';
import {localStorage} from '../globals';


class Logout extends React.Component {
  constructor(props) {
    super(props);
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  render() {
    const {props} = this;
    const {location} = props;

    return (
      <Redirect
        to={{
          pathname: '/',
          state: {from: location}
        }}
      />
    );
  }
}

export default Logout;
