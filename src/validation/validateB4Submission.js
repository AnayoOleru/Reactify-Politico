import {
    validateEmail,
    validatePassword,
    validateLogo,
    validatePhoneNumber,
    validateName
  } from './validateInputs';

  export default function validateB4Submission(userData) {
    if (validateEmail(userData.email)[1] === false
        || validatePassword(userData.password)[1] === false
        || validateLogo(userData.passportUrl)[1] === false
        || validatePhoneNumber(userData.phonenumber)[1] === false
        || validateName(userData.firstname || userData.lastname || userData.othername) === false
    ) {
      return false;
    }
    return true;
  }
