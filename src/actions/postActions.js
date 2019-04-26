import { FETCH_POSTS, NEW_POST, NEW_PARTY, NEW_OFFICE, NEW_VOTE } from './types';
import jwt_decode from 'jwt-decode';

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
      .then(post =>
    //     // eslint-disable-next-line no-console
    //     console.log(post.data[0].token);
    //     if (post.status === 200 && post.data[0].user.isadmin === false) {
    //       localStorage.setItem('authToken', post.data[0].token);
    //       // Decode token to get user data
    //       const decoded = jwt_decode(post.data[0].token);
    //       // Set current user
    //       return dispatch({ type: 'NEW_POST', payload: decoded });
    //     }

    //     if (post.status === 200 && post.data[0].user.isadmin) {
    //       localStorage.setItem('adminToken', post.data[0].token);
    //       // Decode token to get user data
    //       const decoded = jwt_decode(post.data[0].token);
    //       return dispatch({ type: 'NEW_POST', payload: decoded });
    // }
    dispatch({
      type: NEW_POST,
      payload: post
    }));
};

// admin can create a  political party
export const CreateParty = (partyData) => dispatch =>  {
  fetch('https://trustpolitico.herokuapp.com/api/v1/parties',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(partyData)
  })
  .then((response) => response.json())
  .then(posts =>
    dispatch({
    type: NEW_PARTY,
    payload: posts
  }));
};

// admin can create a  political office
export const CreateOffice = (officeData) => dispatch =>  {
  fetch('https://trustpolitico.herokuapp.com/api/v1/offices',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(officeData)
  })
  .then((response) => response.json())
  .then(posts =>
    dispatch({
    type: NEW_OFFICE,
    payload: posts
  }));
};

export const UserVote = (voteeData) => dispatch =>  {
  fetch('https://trustpolitico.herokuapp.com/api/v1/votes',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(voteeData)
  })
  .then((response) => response.json())
  .then(posts =>
    dispatch({
    type: NEW_VOTE,
    payload: posts
  }));
};
