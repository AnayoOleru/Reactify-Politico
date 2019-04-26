import { FETCH_POSTS, NEW_POST } from './types';

// signup action
export const SignupAction = (signupData) => dispatch =>  {
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



export const createPost = (postData) => dispatch =>  {
    // eslint-disable-next-line no-console
    console.log('Action called');
    fetch('https://trustpolitico.herokuapp.com/api/v1/auth/login', {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(postData)
      }).then((response) => response.json())
      .then(post => dispatch({
        type: NEW_POST,
        payload: post
      }));
  };
