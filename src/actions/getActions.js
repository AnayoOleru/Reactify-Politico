import { FETCH_USER, FETCH_PARTIES, FETCH_CANDIDATES, FETCH_OFFICE, FETCH_PARTY, FETCH_RESULT } from './types';

// signup action
export const getAllParties = (partyData) => dispatch =>  {
      fetch('https://trustpolitico.herokuapp.com/api/v1/parties',{
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3Yjg2NzZlLTRmMTYtNGQxZC1iYjJkLWJkOGE3MjA1ZTcyMiIsImlzQWRtaW4iOnRydWUsInVzZXJOYW1lIjoiQW5heW8iLCJsYXN0TmFtZSI6Ik9sZXJ1IiwiaWF0IjoxNTU2MzcwODIzLCJleHAiOjE1NTY0NTcyMjN9.0ZhU_epFYgQGLrtW9aDQ2biFY298k24MeXPLeUFdFHc'
          },
          method: 'GET',
          body: JSON.stringify(partyData)
      })
      .then((response) => response.json())
      .then(parties =>
        dispatch({
        type: FETCH_PARTIES,
        payload: parties
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

     // get all candidates
export const getAllCandidates = (candidateData) => dispatch =>  {
  try{
  fetch('https://trustpolitico.herokuapp.com/api/v1/candidates',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3Yjg2NzZlLTRmMTYtNGQxZC1iYjJkLWJkOGE3MjA1ZTcyMiIsImlzQWRtaW4iOnRydWUsInVzZXJOYW1lIjoiQW5heW8iLCJsYXN0TmFtZSI6Ik9sZXJ1IiwiaWF0IjoxNTU2MzcwODIzLCJleHAiOjE1NTY0NTcyMjN9.0ZhU_epFYgQGLrtW9aDQ2biFY298k24MeXPLeUFdFHc'
      },
      method: 'GET',
      body: JSON.stringify(candidateData)
  })
  .then((response) => response.json())
  .then(candidate =>
    dispatch({
    type: FETCH_CANDIDATES,
    payload: candidate
  }));
} catch(err){
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

// get all political offices
export const getAllOffice = (officeData) => dispatch =>  {
  try{
  fetch('https://trustpolitico.herokuapp.com/api/v1/offices',{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3Yjg2NzZlLTRmMTYtNGQxZC1iYjJkLWJkOGE3MjA1ZTcyMiIsImlzQWRtaW4iOnRydWUsInVzZXJOYW1lIjoiQW5heW8iLCJsYXN0TmFtZSI6Ik9sZXJ1IiwiaWF0IjoxNTU2MzcwODIzLCJleHAiOjE1NTY0NTcyMjN9.0ZhU_epFYgQGLrtW9aDQ2biFY298k24MeXPLeUFdFHc'
      },
      method: 'GET',
      body: JSON.stringify(officeData)
  })
  .then((response) => response.json())
  .then(offices =>
    dispatch({
    type: FETCH_OFFICE,
    payload: offices
  }));
} catch(err){
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

// get a specific political party
export const getSpecificParty = (partyData) => dispatch =>  {
  try{
  fetch(`https://trustpolitico.herokuapp.com/api/v1/parties/${id}`,{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3Yjg2NzZlLTRmMTYtNGQxZC1iYjJkLWJkOGE3MjA1ZTcyMiIsImlzQWRtaW4iOnRydWUsInVzZXJOYW1lIjoiQW5heW8iLCJsYXN0TmFtZSI6Ik9sZXJ1IiwiaWF0IjoxNTU2MzcwODIzLCJleHAiOjE1NTY0NTcyMjN9.0ZhU_epFYgQGLrtW9aDQ2biFY298k24MeXPLeUFdFHc'
      },
      method: 'GET',
      body: JSON.stringify(partyData)
  })
  .then((response) => response.json())
  .then(party =>
    dispatch({
    type: FETCH_PARTY,
    payload: party
  }));
} catch(err){
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

// get a specific political office
export const getSpecificOffice = (officeData) => dispatch =>  {
  try{
  fetch(`https://trustpolitico.herokuapp.com/api/v1/offices/${id}`,{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3Yjg2NzZlLTRmMTYtNGQxZC1iYjJkLWJkOGE3MjA1ZTcyMiIsImlzQWRtaW4iOnRydWUsInVzZXJOYW1lIjoiQW5heW8iLCJsYXN0TmFtZSI6Ik9sZXJ1IiwiaWF0IjoxNTU2MzcwODIzLCJleHAiOjE1NTY0NTcyMjN9.0ZhU_epFYgQGLrtW9aDQ2biFY298k24MeXPLeUFdFHc'
      },
      method: 'GET',
      body: JSON.stringify(officeData)
  })
  .then((response) => response.json())
  .then(office =>
    dispatch({
    type: FETCH_OFFICE,
    payload: office
  }));
} catch(err){
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

// get a election results
export const getElectionResults = (electionData) => dispatch =>  {
  try{
  fetch(`https://trustpolitico.herokuapp.com/api/v1/office/${officeId}/result`,{
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3Yjg2NzZlLTRmMTYtNGQxZC1iYjJkLWJkOGE3MjA1ZTcyMiIsImlzQWRtaW4iOnRydWUsInVzZXJOYW1lIjoiQW5heW8iLCJsYXN0TmFtZSI6Ik9sZXJ1IiwiaWF0IjoxNTU2MzcwODIzLCJleHAiOjE1NTY0NTcyMjN9.0ZhU_epFYgQGLrtW9aDQ2biFY298k24MeXPLeUFdFHc'
      },
      method: 'GET',
      body: JSON.stringify(electionData)
  })
  .then((response) => response.json())
  .then(result =>
    dispatch({
    type: FETCH_RESULT,
    payload: result
  }));
} catch(err){
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
