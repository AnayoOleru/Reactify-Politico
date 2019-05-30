import { DROP_PARTY_SUCCESS, DROP_PARTY_FAILURE } from "./types";
let token = window.localStorage.getItem('token');
import swal from 'sweetalert';

// delete a specific party
export const deleteParty  = (partyid) =>  dispatch =>  {
    try{
    fetch(`https://trustpolitico.herokuapp.com/api/v1/parties/${partyid}`,{
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json',
          'x-access-token': token,
        },
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then((party) => {
      if(name.status === 201) {
        swal({
          icon: 'success',
          title: 'Party successfully deleted',
        });
        // history.push('/parties');
      return dispatch({ type: DROP_PARTY_SUCCESS, payload: party.data });
    }
    if(name.status === 400) {
      swal({
        icon: 'warning',
        title: party.error,
      });
      dispatch({
        type: DROP_PARTY_FAILURE,
        payload: party.error,
      });
    }

    });
  } catch(err){
    dispatch({
      type: DROP_PARTY_FAILURE,
      payload: name.error,
    });
    }
  };
