import jwtDecode from 'jwt-decode';

const tokenKey = 'token';

export const signout = () => {
    localStorage.removeItem(tokenKey);
    window.location = '/sign-in';
  };
