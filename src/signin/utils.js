import PasswordValidator from 'password-validator';
import {validate as emailValidator} from 'email-validator';

const MAX_PW_LENGTH = 100;
const MIN_PW_LENGTH = 8;
const STRONG_PW_LENGTH = 12;


const passwordValidator = new PasswordValidator();
passwordValidator
  .is()
  .min(MIN_PW_LENGTH) // Minimum length 8
  .is()
  .max(MAX_PW_LENGTH) // Maximum length 100
  // .has().uppercase() // Must have uppercase letters
  // .has().lowercase() // Must have lowercase letters
  .has()
  .digits() // Must have digits
  .has()
  .symbols() // Must have symbols
  // .has().not().spaces() // Should not have spaces
  .is()
  .not()
  .oneOf([
    'Passw0rd', 'Password123', 'admin', 'password'
  ]); // Blacklist these values

export {passwordValidator, emailValidator};

export const getPasswordStrength = (password)=> {
  const valid = passwordValidator.validate(password);

  if (!valid || (password.length > 0 && password.length <= MIN_PW_LENGTH)) {
    return 'weak';
  }
  if (
    password.length > MIN_PW_LENGTH
    && password.length <= STRONG_PW_LENGTH
    && valid
  ) {
    return 'medium';
  }
  if (password.length > STRONG_PW_LENGTH && valid) {
    return 'strong';
  }
};

export const getPasswordStrengthClassname = (password)=> {
  let cx = 'font-weight-700';
  const valid = passwordValidator.validate(password);

  if (!valid || (password.length > 0 && password.length <= MIN_PW_LENGTH)) {
    cx += ' text-danger';
  }
  if (
    password.length > MIN_PW_LENGTH
    && password.length <= STRONG_PW_LENGTH
    && valid
  ) {
    cx += ' text-warning';
  }
  if (password.length > STRONG_PW_LENGTH && valid) {
    cx += ' text-success';
  }

  return cx;
};

export const parsePhoneNumber = (number)=> {
  if (number.value.startsWith('+')) {
    return number.value;
  }

  return `+${number.country.dialCode}${number.value}`;
};
