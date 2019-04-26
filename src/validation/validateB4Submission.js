import {
    validateEmail,
    validatePassword,
  } from './validateInputs';

  export default function validateB4Submission(userData) {
    if (validateEmail(userData.email)[1] === false
        || validatePassword(userData.password)[1] === false
    ) {
      return false;
    }
    return true;
  }
