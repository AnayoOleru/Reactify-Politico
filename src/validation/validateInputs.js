let PasswordToCampare;

// validate email
export function validateEmail(Email) {
    // eslint-disable-next-line no-useless-escape
    const regexVal = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regexVal.test(Email)) return ['isEmailError', false];
    return ['isEmailError', true];
  }

//validate password
export function validatePassword(Pasword) {
    PasswordToCampare = Pasword;
    const regexVal = /^[a-zA-Z0-9]{5,15}$/;
    if (!regexVal.test(Pasword)) return ['isPasswordError', false];
    return ['isPasswordError', true];
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
