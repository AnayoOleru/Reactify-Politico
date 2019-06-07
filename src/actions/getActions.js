import {
  FETCH_USER,
  FETCH_PARTIES,
  FETCH_PARTIES_FAILURE,
  FETCH_CANDIDATES,
  FETCH_CANDIDATES_FAILURE,
  FETCH_OFFICES,
  FETCH_OFFICES_FAILURE,
  FETCH_PARTY,
  FETCH_RESULT,
  FETCH_PARTIES_LOADING,
  FETCH_INTERESTED_USERS_SUCCESS,
  FETCH_INTERESTED_USERS_FAILURE,
} from './types';
let token = window.localStorage.getItem('token');
import swal from 'sweetalert';

// get all political
export const getAllParties = (partyData) => dispatch => {
  dispatch({
    type: FETCH_PARTIES_LOADING,
  });
  fetch('https://trustpolitico.herokuapp.com/api/v1/parties', {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json',
      'x-access-token': token,
    },
    method: 'GET',
    body: JSON.stringify(partyData)
  })
    .then((response) => response.json())
    .then(parties =>
      dispatch({
        type: FETCH_PARTIES,
        payload: parties
      })).catch((err) => {
        dispatch({
          type: FETCH_PARTIES_FAILURE,
          payload: err
        });
      });
};

// get all political offices
export const getAllOffice = (officeData) => async (dispatch) => {
  try {
    let response = await fetch('https://trustpolitico.herokuapp.com/api/v1/offices', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token
      },
      method: 'GET',
      body: JSON.stringify(officeData)
    });
    let offices = await response.json();
    dispatch({
      type: FETCH_OFFICES,
      payload: offices
    });
  } catch (err) {
    dispatch({
      type: FETCH_OFFICES_FAILURE,
      payload: err
    });
  }
};


// get all users
export const getAllUsers = (userData) => dispatch => {
  fetch('https://trustpolitico.herokuapp.com/api/v1/users', {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json',
      'x-access-token': token
    },
    method: 'GET',
    body: JSON.stringify(userData)
  })
    .then((response) => response.json())
    .then((users) => {
      dispatch({
        type: FETCH_USER,
        payload: users.data
      });
    }
    );
};

export const getAUser = (userid) => dispatch => {
  fetch(`https://trustpolitico.herokuapp.com/api/v1/${userid}/users`, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json',
      'x-access-token': token
    },
    method: 'GET',
    body: JSON.stringify()
  })
    .then((response) => response.json())
    .then((users) => {
      dispatch({
        type: FETCH_USER,
        payload: users.data
      });
    }
    );
};

// get all candidates
export const getAllCandidates = (candidateData) => dispatch => {
  try {
    fetch('https://trustpolitico.herokuapp.com/api/v1/candidates', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token,
        mode: 'cors',
      },
      method: 'GET',
      body: JSON.stringify(candidateData)
    })
      .then((response) => response.json())
      .then((candidate) => {
        if(candidate.data == 0){
          swal({
            title: 'No candidates have been registered yet.',
            timer: 2000
          });
        }
        dispatch({
          type: FETCH_CANDIDATES,
          payload: candidate
        });
      }
      );
  } catch (err) {
    dispatch({
      type: FETCH_CANDIDATES_FAILURE,
      payload: err
    });
  }
};

export const getAllElectionResults = (officeId) => dispatch =>  {
  try{
  fetch(`https://trustpolitico.herokuapp.com/api/v1/office/${officeId}/result`,{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token,
        mode: 'cors',
      },
      method: 'GET',
      body: JSON.stringify()
  })
  .then((response) => response.json())
  .then((results) =>{
    if(results.data == 0){
      swal({
        title: 'No votes for this office yet',
        timer: 2000
      });
    }
      dispatch({
      type: FETCH_CANDIDATES,
      payload: results
    });
  }
    );
} catch(err){
  dispatch({
    type: FETCH_CANDIDATES_FAILURE,
    payload: err
  });
  }
};

export const getAllInterestedUsers = () => dispatch =>  {
  try{
  fetch(`https://trustpolitico.herokuapp.com/api/v1/office/interest`,{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token,
        mode: 'cors',
      },
      method: 'GET',
      body: JSON.stringify()
  })
  .then((response) => response.json())
  .then((results) =>{
    if(results.data == 0){
      swal({
        title: 'No user has indicated interest',
        timer: 2000
      });
    }
      dispatch({
      type: FETCH_INTERESTED_USERS_SUCCESS,
      payload: results
    });
  }
    );
} catch(err){
  dispatch({
    type: FETCH_INTERESTED_USERS_FAILURE,
    payload: err
  });
  }
};

