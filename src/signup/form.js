import React, {Fragment} from 'react';
import {Auth} from 'aws-amplify';
import {Redirect} from 'react-router-dom';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import {
  passwordValidator,
  emailValidator,
  getPasswordStrength,
  getPasswordStrengthClassname,
  parsePhoneNumber
} from '../signin/utils';
import {
  getSession,
  deleteSession,
  setSessionVariable,
  getSessionVariable
} from '../auth/session';
import githubSVG from '../logos/github.svg';
import googleSVG from '../logos/google.svg';


const MIN_NAME_LENGTH = 2;


class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      phoneNumber: {status: false, value: '', country: {}},
      confirmationCode: '',
      privacyCheck: false,
      privacyAlert: false,
      inputAlert: {status: false, message: ''},
      hasSignedUp: false,
      hasVerified: false
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleChange(evt) {
    const {target} = evt;

    if (target.name === 'privacyCheck') {
      this.setState({privacyCheck: !this.state.privacyCheck});
    } else {
      this.setState({[target.name]: target.value});
    }
  }

  handlePhoneChange(status, value, country) {
    this.setState({phoneNumber: {status, value, country}});
  }

  validate() {
    const {
      firstname, lastname, password, email, phoneNumber, privacyCheck
    } = this.state;

    if (
      firstname.length <= MIN_NAME_LENGTH
      || lastname.length <= MIN_NAME_LENGTH
      || !passwordValidator.validate(password)
      || !emailValidator(email)
      || !phoneNumber.status
    ) {
      this.setState({
        inputAlert: {
          status: true,
          message: 'Some fields are not valid.'
        }
      });
      return false;
    }

    if (!privacyCheck) {
      this.setState({privacyAlert: true});
      return false;
    }

    return true;
  }

  resetAlerts() {
    this.setState({
      privacyAlert: false,
      inputAlert: {
        status: false,
        message: ''
      }
    });
  }

  setSession(user) {
    const {email} = this.state;

    setSessionVariable('currentUser', 'id', user.userSub);
    setSessionVariable(user.userSub, 'hasSignedUp', true);
    setSessionVariable(user.userSub, 'email', email);
  }

  getSession() {
    const sub = getSessionVariable('currentUser', 'id');
    return getSession(sub);
  }

  removeSession() {
    const sub = getSessionVariable('currentUser', 'id');
    deleteSession(sub);
    deleteSession('currentUser');
  }

  async attemptSignup() {
    const {firstname, lastname, password, email, phoneNumber} = this.state;

    try {
      const user = await Auth.signUp({
        username: email,
        email,
        password,
        attributes: {
          email,
          ['given_name']: firstname,
          ['family_name']: lastname,
          ['phone_number']: parsePhoneNumber(phoneNumber)
        }
      });

      this.setState({hasSignedUp: true});
      this.setSession(user);
    } catch (err) {
      if (err.code === 'UsernameExistsException') {
        this.setState({
          inputAlert: {
            status: true, message: 'User already exists.'
          }
        });
      } else {
        this.setState({
          inputAlert: {
            status: true, message: 'Could not sign up.'
          }
        });
      }
    }
  }

  async handleSignup(evt) {
    evt.preventDefault();

    this.resetAlerts();

    if (!this.validate()) {
      return;
    }

    await this.attemptSignup();
  }

  // eslint-disable-next-line
  async handleConfirmation(evt) {
    evt.preventDefault();

    const {confirmationCode} = this.state;
    const {email} = this.getSession();

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      this.setState({hasVerified: true});
      this.removeSession();
      return;
    } catch (err) {
      if (err.code === 'CodeMismatchException') {
        this.setState({
          inputAlert: {
            status: true,
            message: 'Invalid code.'
          }
        });
      } else {
        this.setState({
          inputAlert: {
            status: true,
            message: 'Unknown error.'
          }
        });
      }
      return;
    }
  }

  render() {
    const {hasSignedUp, privacyAlert, inputAlert, hasVerified} = this.state;
    const {location} = this.props;
    const session = this.getSession();
    const sessionSignup = session ? session.hasSignedUp : false;

    return (
      <Fragment>
        {hasVerified ?
          (
            <Redirect
              to={{
                pathname: '/signin',
                state: {from: location}
              }}
            />
          )
          : (
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-header bg-transparent pb-5">
                    {hasSignedUp || sessionSignup
                      ? (
                        <Fragment>
                          <div className="text-muted text-center mt-2 mb-4">
                            <h4>Confirmation Code</h4>
                          </div>
                          <div className="text-center">
                            <p> A verification code was sent to your email! </p>
                          </div>
                        </Fragment>
                      )
                      : (
                        <Fragment>
                          <div className="text-muted text-center mt-2 mb-4">
                            <small>Sign up with</small>
                          </div>
                          <div className="text-center">
                            <a href="#" className="btn btn-neutral btn-icon mr-4">
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
                    {hasSignedUp || sessionSignup
                      ? (
                        <form role="form" onSubmit={this.handleConfirmation}>
                          {(hasSignedUp && inputAlert.status) &&
                            <div className="alert alert-danger" role="alert">
                              <strong>Warning!</strong> {inputAlert.message}
                            </div>
                          }
                          <div className="form-group">
                            <div className="input-group input-group-alternative">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="ni ni-key-25"></i>
                                </span>
                              </div>
                              <input
                                className="form-control"
                                name="confirmationCode"
                                placeholder="Code"
                                type="text"
                                onChange={(evt)=> this.handleChange(evt)}
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary mt-4"
                            >
                            Verify
                            </button>
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                          <div className="text-center text-muted mb-4">
                            <small>Or sign up with credentials</small>
                          </div>
                          <form role="form" onSubmit={this.handleSignup}>
                            {(!hasSignedUp && inputAlert.status) &&
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
                                  name="firstname"
                                  placeholder="First Name"
                                  type="text"
                                  onChange={(evt)=> this.handleChange(evt)}
                                />
                              </div>
                            </div>
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
                                  name="lastname"
                                  placeholder="Last Name"
                                  type="text"
                                  onChange={(evt)=> this.handleChange(evt)}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div
                                className="input-group input-group-alternative mb-3"
                              >
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="ni ni-email-83"></i>
                                  </span>
                                </div>
                                <input
                                  className="form-control"
                                  name="email"
                                  placeholder="Email"
                                  type="email"
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
                            {(this.state.password.length > 1) &&
                              <div>
                                <div className="text-muted font-italic">
                                  <small>
                                  password strength:
                                    <span
                                      className={
                                        getPasswordStrengthClassname(
                                          this.state.password
                                        )
                                      }
                                    >
                                      &nbsp; {
                                        getPasswordStrength(
                                          this.state.password
                                        )
                                      }
                                    </span>
                                  </small>
                                </div>
                                <br />
                              </div>
                            }
                            <div className="form-group">
                              <div className="input-group input-group-alternative">
                                <IntlTelInput
                                  defaultCountry="au"
                                  css={['intl-tel-input tel-input', 'form-control']}
                                  name="phoneNumber"
                                  placeholder="Phone Number"
                                  type="tel"
                                  onPhoneNumberChange={
                                    (status, value, country)=>
                                      this.handlePhoneChange(status, value, country)
                                  }
                                />
                              </div>
                            </div>
                            <div className="row my-4">
                              <div className="col-12">
                                <div
                                  // eslint-disable-next-line
                                  className="custom-control custom-control-alternative custom-checkbox"
                                >
                                  <input
                                    className="custom-control-input"
                                    id="customCheckRegister"
                                    name="privacyCheck"
                                    type="checkbox"
                                    onChange={(evt)=> this.handleChange(evt)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customCheckRegister"
                                  >
                                    <span
                                      className="text-muted"
                                    >
                                    I agree with the &nbsp;
                                      <a href="/privacy">Privacy Policy</a>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-center">
                              {(!hasSignedUp && privacyAlert) &&
                                <div className="alert alert-primary" role="alert">
                                  <strong>
                                  Sorry!
                                  </strong>
                                  &nbsp; Please agree to our privacy policy.
                                </div>
                              }
                              <button
                                type="submit"
                                className="btn btn-primary mt-4"
                              >
                              Create account
                              </button>
                            </div>
                          </form>
                        </Fragment>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </Fragment>
    );
  }
}

export default SignupForm;
