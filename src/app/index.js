import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {createLink} from '../utils/router';
import NavBar from '../nav';
import Home from '../home';
import Footer from '../footer';
import theme from './theme.css';


const userIsAuthenticated = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: createLink('/login'),
  // Determine if the user is authenticated or not
  authenticatedSelector: (state)=> state.user.isLoggedIn,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
});

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one,
  // or to the landing page if none is specified and the user is already
  // logged in
  redirectPath: (state, ownProps)=> (
    createLink(locationHelper.getRedirectQueryParam(ownProps))
    || createLink('/')
  ),
  // This prevents us from adding the query parameter when we send
  // the user away from the login page
  allowRedirectBack: false,
  // This prevents us from adding the query parameter when we
  // send the user away from the login page
  // Determine if the user is authenticated or not
  authenticatedSelector: (state)=> !state.user.isLoggedIn,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated'
});


const App = ({user})=> (
  <Router>
    <div>
      <NavBar />
      <div className={theme.appContent}>
        <Route
          path={createLink('/')}
          exact={true}
          component={Home}
        />
        {/* <Route path="/" exact={true} component={ProtectedHome} />
        <Route path="/login" component={RedirectedLogin} />
        <Route path="/apps" component={ProtectedApps} />
        <Route path="/docs" component={ProtectedDocs} />
        <Route path="/profile" component={ProtectedProfile} /> */}
      </div>
      <Footer />
    </div>
  </Router>
);
App.propTypes = {
  user: PropTypes.object
};


const mapStateToProps = ({user})=> ({
  user
});

export default connect(mapStateToProps)(App);
