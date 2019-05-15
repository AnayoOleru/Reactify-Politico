
// validate email
export function validateEmail(Email) {
    // eslint-disable-next-line no-useless-escape
    const regexVal = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regexVal.test(Email)) return ['isEmailError', false];
    return ['isEmailError', true];
  }

  // validate Phone number
export function validatePhoneNumber(Email) {
  // eslint-disable-next-line no-useless-escape
  const regexVal = /^[0]\d{10}$/;
  if (!regexVal.test(Email)) return ['isNumberError', false];
  return ['isNumberError', true];
}

//validate password
export function validatePassword(Pasword) {
    const regexVal = /^[a-zA-Z0-9]{5,15}$/;
    if (!regexVal.test(Pasword)) return ['isPasswordError', false];
    return ['isPasswordError', true];
  }

//validate logo
export function validateLogo(logo) {
  const regexVal = /https?:\/\/[^\s]+/;
  if (!regexVal.test(logo)) return ['isLogoError', false];
  return ['isLogoError', true];
}

// validate headquaters address
export function validateHeadquarter(headquater) {
  // eslint-disable-next-line no-useless-escape
  const regexVal = /[A-Za-z0-9'\.\-\s\,]/;
  if (!regexVal.test(headquater)) return ['isHeadquaterError', false];
  return ['isHeadquaterError', true];
}

// validate political party name
export function validateName(Name) {
  const regexVal = /^[A-Za-z\s]+$/;
  if (!regexVal.test(Name)) return ['isNameError', false];
  return ['isNameError', true];
}

// validate political office name
export function validateOfficeName(officeName) {
  const regexVal = /^[A-Za-z\s]+$/;
  if (!regexVal.test(officeName)) return ['isNameError', false];
  return ['isNameError', true];
}

// validate political office name
export function validateOfficeType(officeType) {
  const regexVal = /^[A-Za-z\s]+$/;
  if (!regexVal.test(officeType)) return ['isTypeError', false];
  return ['isTypeError', true];
}

  export function validateInputs(inputname, inputValue) {
    let result;
    switch (inputname) {
      case 'email':
        result = validateEmail(inputValue);
        break;
      case 'password':
        result = validatePassword(inputValue);
        break;
      default:
        result = null;
    }
    return result;
  }
