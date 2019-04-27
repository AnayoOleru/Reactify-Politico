import { FETCH_POSTS, NEW_POST, FETCH_USER } from './types';

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

    // get all users
export const getAllUsers = (userData) => dispatch =>  {
    fetch('https://trustpolitico.herokuapp.com/api/v1/users',{
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json',
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3Yjg2NzZlLTRmMTYtNGQxZC1iYjJkLWJkOGE3MjA1ZTcyMiIsImlzQWRtaW4iOnRydWUsInVzZXJOYW1lIjoiQW5heW8iLCJsYXN0TmFtZSI6Ik9sZXJ1IiwiaWF0IjoxNTU2MzcwODIzLCJleHAiOjE1NTY0NTcyMjN9.0ZhU_epFYgQGLrtW9aDQ2biFY298k24MeXPLeUFdFHc'
        },
        method: 'GET',
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then(users =>
      dispatch({
      type: FETCH_USER,
      payload: users
    }));
  };
