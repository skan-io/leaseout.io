import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Spinner from 'react-spinkit';
import {Auth} from 'aws-amplify';
import {isAuthenticated as checkAuth} from '../auth/session';
import {setAuth} from '../auth/actions';
import {setUser} from '../user/actions';
import {AUTH_STATES} from '../auth/auth-states';
import githubSVG from '../logos/github.svg';
import googleSVG from '../logos/google.svg';


class SigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      inputAlert: {status: false, message: ''},
      hasSignedin: false,
      pendingInitial: true
    };
  }

  async componentDidMount() {
    const {onSignInSuccess} = this.props;
    const info = await checkAuth();

    if (info) {
      onSignInSuccess();
      this.setState({hasSignedin: true});
    }

    this.setState({pendingInitial: false});
  }

  componentDidUpdate() {
    const {isAuthenticated} = this.props;

    if (!isAuthenticated && this.state.hasSignedin) {
      this.setState({hasSignedin: false});
    }
  }

  handleChange(evt) {
    const {target} = evt;
    this.setState({[target.name]: target.value});
  }

  // eslint-disable-next-line
  async handleSubmit() {
    const {username, password} = this.state;
    const {onSignInPending, onSignInSuccess, onSignInFailed} = this.props;

    try {
      onSignInPending();
      const user = await Auth.signIn({username, password});
      onSignInSuccess(user);
      this.setState({hasSignedin: true});
    } catch (err) {
      onSignInFailed();
      this.setState({
        inputAlert: {status: true, message: 'Username or password incorrect.'}
      });
    }
  }

  render() {
    const {hasSignedin, inputAlert, pendingInitial} = this.state;
    const {location} = this.props;

    return (
      <Fragment>
        {pendingInitial
          ? (
            <div className='text-center'>
              <Spinner name="ball-pulse-rise" color="white" />
            </div>
          )
          : (
            <Fragment>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="card bg-secondary shadow border-0">
                    <div className="card-header bg-transparent pb-5">
                      {hasSignedin
                        ? (
                          <Redirect
                            to={{
                              pathname: '/profile',
                              state: {from: location}
                            }}
                          />
                        )
                        : (
                          <Fragment>
                            <div className="text-muted text-center mt-2 mb-4">
                              <small>Sign in with</small>
                            </div>
                            <div className="text-center">
                              <a
                                href="#"
                                className="btn btn-neutral btn-icon mr-4"
                              >
                                <span className="btn-inner--icon">
                                  <img src={githubSVG} />
                                </span>
                                <span className="btn-inner--text">Github</span>
                              </a>
                              <a href="#" className="btn btn-neutral btn-icon">
                                <span className="btn-inner--icon">
                                  <img src={googleSVG} />
                                </span>
                                <span className="btn-inner--text">Google</span>
                              </a>
                            </div>
                          </Fragment>
                        )
                      }
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <form role="form">
                        {(!hasSignedin && inputAlert.status) &&
                          <div className="alert alert-danger" role="alert">
                            <strong>Warning!</strong> {inputAlert.message}
                          </div>
                        }
                        <div className="form-group">
                          <div
                            className="input-group input-group-alternative mb-3"
                          >
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="ni ni-circle-08"></i>
                              </span>
                            </div>
                            <input
                              className="form-control"
                              name="username"
                              placeholder="Username"
                              type="text"
                              onChange={(evt)=> this.handleChange(evt)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="ni ni-lock-circle-open"></i>
                              </span>
                            </div>
                            <input
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              type="password"
                              onChange={(evt)=> this.handleChange(evt)}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="button"
                            className="btn btn-primary mt-4"
                            onClick={()=> this.handleSubmit()}
                          >
                          Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
      </Fragment>
    );
  }
}
SigninForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
  onSignInPending: PropTypes.func,
  onSignInSuccess: PropTypes.func,
  onSignInFailed: PropTypes.func
};


const mapStateToProps = ({auth})=> ({
  isAuthenticated: auth.authentication === AUTH_STATES.authenticated
});

const mapDispatchToProps = (dispatch)=> ({
  onSignInPending() {
    dispatch(setAuth(AUTH_STATES.pending));
  },
  onSignInSuccess(user) {
    dispatch(setUser(user));
    dispatch(setAuth(AUTH_STATES.authenticated));
  },
  onSignInFailed() {
    dispatch(setAuth(AUTH_STATES.unauthenticated));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
