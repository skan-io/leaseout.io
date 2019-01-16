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
import githubSVG from '../logos/github.svg';
import googleSVG from '../logos/google.svg';


const MIN_USERNAME_LENGTH = 5;


class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
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

  // eslint-disable-next-line
  async handleSubmit() {
    const {
      username, password, email, phoneNumber, privacyCheck, hasSignedUp,
      confirmationCode
    } = this.state;

    this.setState({
      privacyAlert: false,
      inputAlert: {
        status: false,
        message: ''
      }
    });

    if (hasSignedUp) {
      try {
        await Auth.confirmSignUp(username, confirmationCode);
        this.setState({hasVerified: true});
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

    if (
      username.length <= MIN_USERNAME_LENGTH
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
      return;
    }

    if (!privacyCheck) {
      this.setState({privacyAlert: true});
      return;
    }

    if (!hasSignedUp) {
      try {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email,
            ['phone_number']: parsePhoneNumber(phoneNumber)
          }
        });

        this.setState({hasSignedUp: true});
      } catch (err) {
        console.log(err);
        if (err.code === 'UsernameExistsException') {
          this.setState({
            inputAlert: {
              status: true, message: 'User already exists.'
            }
          });
        } else {
          this.setState({
            inputAlert: {
              status: true, message: 'Unknown error.'
            }
          });
        }
      }
    }
  }

  render() {
    const {hasSignedUp, privacyAlert, inputAlert, hasVerified} = this.state;
    const {location} = this.props;

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
                    {hasSignedUp
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
                    {hasSignedUp
                      ? (
                        <form role="form">
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
                              type="button"
                              className="btn btn-primary mt-4"
                              onClick={()=> this.handleSubmit()}
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
                          <form role="form">
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
                                type="button"
                                className="btn btn-primary mt-4"
                                onClick={()=> this.handleSubmit()}
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
