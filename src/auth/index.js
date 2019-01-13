import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Auth0Lock from 'auth0-lock';
import {AUTH_CONFIG} from '../config';
import {requestLogin} from './actions';
import {localStorage} from '../globals';


const TO_ISO = 1000;


export const isAuthenticated = ()=> {
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
};


class AuthLock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
    this.onAuthenticated = this.onAuthenticated.bind(this);

    this.lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
      auth: {
        responseType: AUTH_CONFIG.responseType,
        sso: false
      },
      container: AUTH_CONFIG.container,
      theme: {
        primaryColor: '#56b7a7',
        logo: 'https://raw.githubusercontent.com/skan-io/leaseout.io/rebuild-2/src/favicon.png'
      },
      languageDictionary: {
        title: 'Log In'
      }
    });

    this.onAuthenticated();
  }

  onAuthenticated() {
    this.lock.on('authenticated', (authResult)=> {
      const expiresAt = JSON.stringify(
        (authResult.expiresIn * TO_ISO) + new Date().getTime()
      );

      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);

      this.setState({loggedIn: true});
    });
  }

  componentDidMount() {
    const {location, onRequestLogin} = this.props;
    // Avoid showing Lock when hash is parsed.
    if (!(/access_token|id_token|error/.test(location.hash))) {
      onRequestLogin();
      this.lock.show({allowSignUp: true});
    }
  }

  render() {
    const style = {margin: 'auto', marginTop: '10%'};

    return (
      this.state.loggedIn ? (
        <Redirect
          to={{
            pathname: '/private',
            state: {from: this.props.location}
          }}
        />
      ) : (
        <div>
          <div id={AUTH_CONFIG.container} style={style}></div>
        </div>
      )
    );
  }
}
AuthLock.propTypes = {
  location: PropTypes.object,
  onRequestLogin: PropTypes.func
};

const mapStateToProps = ()=> ({});

const mapDispatchToProps = (dispatch)=> ({
  onRequestLogin: ()=> {
    dispatch(requestLogin());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLock);
