import { FETCH_USER, FETCH_PARTIES, FETCH_PARTIES_FAILURE, FETCH_CANDIDATES, FETCH_CANDIDATES_FAILURE, FETCH_OFFICES, FETCH_OFFICES_FAILURE, FETCH_PARTY, FETCH_RESULT } from './types';
let token = window.localStorage.getItem('token');

// get all political
export const getAllParties = (partyData) => dispatch =>  {
      fetch('https://trustpolitico.herokuapp.com/api/v1/parties',{
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
      })).catch((err)=>{
        dispatch({
          type: FETCH_PARTIES_FAILURE,
          payload: err
        })
      });
    };

    // get all political offices
export const getAllOffice = (officeData) => dispatch =>  {
  try{
  fetch('https://trustpolitico.herokuapp.com/api/v1/offices',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': token
      },
      method: 'GET',
      body: JSON.stringify(officeData)
  })
  .then((response) => response.json())
  .then(offices =>
    dispatch({
      type: FETCH_OFFICES,
      payload: offices
    }));
} catch(err){
  dispatch({
    type: FETCH_OFFICES_FAILURE,
    payload: err
  });
  }
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

     // get all candidates
export const getAllCandidates = (candidateData) => dispatch =>  {
  try{
  fetch('https://trustpolitico.herokuapp.com/api/v1/candidates',{
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
  .then(candidate =>
    // dispatch({
    //   type: FETCH_CANDIDATES,
    //   payload: candidate
    // })
    console.log(candidate)
    );
} catch(err){
  dispatch({
    type: FETCH_CANDIDATES_FAILURE,
    payload: err
  });
  }
};

