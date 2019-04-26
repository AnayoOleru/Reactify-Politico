import {
    validateOfficeName,
    validateOfficeType,
  } from './validateInputs';

  export default function validateOfficeSubmission(officeData) {
    if (validateOfficeName(officeData.name)[1] === false
        || validateOfficeType(officeData.type)[1] === false
    ) {
      return false;
    }
    return true;
  }
