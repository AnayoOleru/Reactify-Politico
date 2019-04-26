import { FETCH_POSTS, NEW_POST } from './types';

// signup action
export const SignupAction = (signupData) => dispatch =>  {
      fetch('https://trustpolitico.herokuapp.com/api/v1/auth/signup',{
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
          },
          method: 'GET',
          body: JSON.stringify(signupData)
      })
      .then((response) => response.json())
      .then(posts =>
        dispatch({
        type: NEW_POST,
        payload: posts
      }));
    };

    // signup action
export const UsersAction = (signupData) => dispatch =>  {
    fetch('https://trustpolitico.herokuapp.com/api/v1/auth/signup',{
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(signupData)
    })
    .then((response) => response.json())
    .then(posts =>
      dispatch({
      type: NEW_POST,
      payload: posts
    }));
  };