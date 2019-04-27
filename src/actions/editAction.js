import { EDIT_PARTY } from "./types";

// edit a specific party name
export const editParty  = (nameData) =>  dispatch =>  {
    try{
    fetch(`https://trustpolitico.herokuapp.com/api/v1/parties/${Id}/name`,{
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json',
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3Yjg2NzZlLTRmMTYtNGQxZC1iYjJkLWJkOGE3MjA1ZTcyMiIsImlzQWRtaW4iOnRydWUsInVzZXJOYW1lIjoiQW5heW8iLCJsYXN0TmFtZSI6Ik9sZXJ1IiwiaWF0IjoxNTU2MzcwODIzLCJleHAiOjE1NTY0NTcyMjN9.0ZhU_epFYgQGLrtW9aDQ2biFY298k24MeXPLeUFdFHc'
        },
        method: 'PATCH',
        body: JSON.stringify({
            name: nameData
        })
    })
    .then((response) => response.json())
    .then(result =>
      dispatch({
      type: EDIT_PARTY,
      payload: result
    }));
  } catch(err){
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
