import { FETCH_POSTS, NEW_POST, NEW_PARTY, NEW_OFFICE, NEW_VOTE, NEW_CANDIDATE } from './types';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';
// signup action


export const SignupAction = (signupData) => dispatch =>  {
  // eslint-disable-next-line no-console
  console.log('1');
      fetch('https://trustpolitico.herokuapp.com/api/v1/auth/signup',{
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(signupData)
      })
      .then((response) => response.json()
      .then((posts) => {
        if(posts.status === 201) {
          localStorage.setItem('token', posts.data[0].token);
          const decoded = jwt_decode(posts.data[0].token);
          return dispatch({ type: NEW_POST, payload: decoded });
        }
       }
      )
      .catch((err) => {
        if(!err.response) {
          swal({
            icon: 'success',
            title: 'successful signup',
          });
          dispatch({
            type: 'GET_ERRORS',
            payload: err,
          });
        } else {
          swal({
            icon: 'warning',
            title: err.response.data.message
          });
          dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data.message,
          });
        }
      })
      );
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
      .then((post) => {
        localStorage.setItem('token', post.data[0].token);
        const decoded = jwt_decode(post.data[0].token);
      if(post.status === 201 && decoded.isAdmin === true) {
        window.location = '/add-party';
        return dispatch({ type: NEW_POST, payload: decoded });
      }
      if(post.status === 201 && decoded.isAdmin === false) {
        window.location = '/parties';
        return dispatch({ type: NEW_POST, payload: decoded });
      }
    }
      ) .catch((err) => {
        if(!err.response) {
          swal({
            icon: 'success',
            title: 'successful signup',
          });
          dispatch({
            type: 'GET_ERRORS',
            payload: err,
          });
        } else {
          swal({
            icon: 'warning',
            title: err.response.data.message
          });
          dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data.message,
          });
        }
      });
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

// user can vote a candidate
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

// register user as a candidate
export const RegisterUserAsCandidate = (candidateData) => dispatch =>  {
  // eslint-disable-next-line no-undef
  fetch(`https://trustpolitico.herokuapp.com/api/v1/office/${userid}/register`,{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(candidateData)
  })
  .then((response) => response.json())
  .then(posts =>
    dispatch({
    type: NEW_CANDIDATE,
    payload: posts
  }));
};
