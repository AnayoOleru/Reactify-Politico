import {
    validateName,
    validateLogo,
    validateHeadquarter
  } from './validateInputs';

  export default function validatePartySubmission(postData) {
    if (validateName(postData.name)[1] === false
        || validateLogo(postData.logo)[1] === false || validateHeadquarter(postData.headquarters)
    ) {
      return false;
    }
    return true;
  }
