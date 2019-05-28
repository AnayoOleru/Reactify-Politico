import { DROP_PARTY } from "./types";
let token = window.localStorage.getItem('token');

// delete a specific party
export const deleteAParty  = (dispatch, partyId)  =>  {
    try{
    fetch(`https://trustpolitico.herokuapp.com/api/v1/parties/${partyId}`,{
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json',
          'x-access-token': token,
        },
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then(deletedParty =>
      console.log(deletedParty)
    //   dispatch({
    //   type: DROP_PARTY,
    //   payload: result
    // })
    );
  } catch(err){
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
