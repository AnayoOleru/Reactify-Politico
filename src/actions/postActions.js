import { NEW_POST, NEW_PARTY_SUCCESS, NEW_OFFICE_SUCCESS, NEW_VOTE_SUCCESS, NEW_VOTE_FAILURE, NEW_CANDIDATE_SUCCESS, NEW_CANDIDATE_FAILURE, NEW_OFFICE_FAILURE, NEW_PARTY_FAILURE, NEW_SIGNUP_SUCCESS, NEW_SIGNUP_FAILURE, NEW_SIGNIN_FAILURE, NEW_SIGNIN_SUCCESS } from './types';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';


let token = window.localStorage.getItem('token');


export const SignupAction = (signupData) => dispatch =>  {
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
            swal({
              icon: 'success',
              title: 'Signup successful',
            });
            window.location = '/parties';
          return dispatch({ type: NEW_SIGNUP_SUCCESS, payload: posts.data });
        }
        if(posts.status >= 400) {
          swal({
            icon: 'warning',
            title: posts.error,
          });
          dispatch({
            type: NEW_SIGNUP_FAILURE,
            payload: posts.error,
          });
        }
       }
      )
      .catch((err) => {
        dispatch({
          type: NEW_SIGNUP_FAILURE,
          payload: err,
        });
        if(err.response) {
          swal({
            icon: 'warning',
            title: err,
          });
        }
      })
      );
    };



export const SigninAction = (postData) => dispatch =>  {
    fetch('https://trustpolitico.herokuapp.com/api/v1/auth/login', {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(postData)
      }).then((response) => response.json())
      .then((post) => {
        const decoded = jwt_decode(post.data[0].token);
        localStorage.setItem('token', post.data[0].token);
      if(post.status === 201 && decoded.isAdmin === true) {
           swal({
             icon: 'success',
             title: 'Signin successful',
           });
        window.location = '/add-party';
        return dispatch({ type: NEW_SIGNIN_SUCCESS, payload: decoded });
      }
      if(post.status === 201 && decoded.isAdmin === false) {
        window.location = '/parties';
        return dispatch({ type: NEW_SIGNIN_SUCCESS, payload: decoded });
      }

      if(post.status >= 400) {
          swal({
            icon: 'warning',
            title: post.error,
          });
        dispatch({
          type: NEW_SIGNIN_FAILURE,
          payload: post.error,
        });
      }
    }
      ) .catch((err) => {
        if(!err.response) {
          dispatch({
            type: NEW_SIGNIN_FAILURE,
            payload: err,
          });
        }
      });
};

// admin can create a  political party
export const CreateParty = (partyData) => dispatch =>  {
  fetch('https://trustpolitico.herokuapp.com/api/v1/parties',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token
      },
      method: 'POST',
      body: JSON.stringify(partyData)
  })
  .then((response) => response.json())
  .then((posts) => {
    if(posts.status === 201 ) {
        swal({
          icon: 'success',
          title: 'Party created successfully',
        });
      window.location = '/all-parties';
      return dispatch({ type: NEW_PARTY_SUCCESS, payload: posts });
    }
    if(posts.status >= 400 ) {
        swal({
          icon: 'warning',
          title: posts.error,
        });
      return dispatch({ type: NEW_PARTY_FAILURE, payload: posts.error });
    }
  }
).catch((err)=>{
    dispatch({
      type: NEW_PARTY_FAILURE,
      payload: err
    });
  });
};

// admin can create a  political office
export const CreateOffice = (officeData) => dispatch =>  {
  fetch('https://trustpolitico.herokuapp.com/api/v1/offices',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token
      },
      method: 'POST',
      body: JSON.stringify(officeData)
  })
  .then((response) => response.json())
  .then((posts) => {
    if(posts.status === 201 ) {
      swal({
        icon: 'success',
        title: 'Office created successfully',
      });
    window.location = '/all-offices';
    return dispatch({ type: NEW_OFFICE_SUCCESS, payload: posts });
  }
  if(posts.status >= 400 ) {
      swal({
        icon: 'warning',
        title: posts.error,
      });
    return dispatch({ type: NEW_OFFICE_FAILURE, payload: posts.error });
  }
  }).catch((err)=>{
    dispatch({
      type: NEW_OFFICE_FAILURE,
      payload: err
    });
  });
};

// user can vote a candidate
export const UserVote = (voteeData) => dispatch =>  {
  fetch('https://trustpolitico.herokuapp.com/api/v1/votes',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token
      },
      method: 'POST',
      body: JSON.stringify(voteeData)
  })
  .then((response) => response.json())
  .then((posts) => { 
    if(posts.status === 201 ) {
      swal({
        icon: 'success',
        title: 'You have successfully voted for this user',
      });
    return dispatch({ type: NEW_VOTE_SUCCESS, payload: posts });
  }
  if(posts.status >= 400 ) {
    console.log(posts); 
      swal({
        icon: 'warning',
        title: posts.error[0].message,
      });
    return dispatch({ type: NEW_VOTE_FAILURE, payload: posts.error });
  }});
};

// register user as a candidate
export const RegisterUserAsCandidate = (candidateData, userid) => dispatch =>  {
  // eslint-disable-next-line no-undef
  fetch(`https://trustpolitico.herokuapp.com/api/v1/office/${userid}/register`,{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token
      },
      method: 'POST',
      body: JSON.stringify(candidateData)
  })
  .then((response) => response.json())
  .then((posts) => {
    if(posts.status === 201) {
        swal({
          icon: 'success',
          title: 'User successful registered as a candidate',
        });
        // history.push('/parties');
      return dispatch({ type: NEW_CANDIDATE_SUCCESS, payload: posts.data });
    }
    if(posts.status >= 400) {
      swal({
        icon: 'warning',
        title: posts.error,
      });
      dispatch({
        type: NEW_CANDIDATE_FAILURE,
        payload: posts.error,
      });
    }
  });
};
