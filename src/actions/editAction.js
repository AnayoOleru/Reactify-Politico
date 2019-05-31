import { EDIT_PARTY_FAILURE, EDIT_PARTY_SUCCESS } from "./types";
import swal from 'sweetalert';

let token = window.localStorage.getItem('token');
// edit a specific party name
export const editParty  = (nameData, partyid) =>  dispatch =>  {
    try{
    fetch(`https://trustpolitico.herokuapp.com/api/v1/parties/${partyid}/name`,{
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json',
          'x-access-token': token,
        },
        method: 'PATCH',
        body: JSON.stringify({
            name: nameData
        })
    })
    .then((response) => response.json())
    .then((name) => {
      console.log(name);
      
      if(name.status === 201) {
        swal({
          icon: 'success',
          title: 'Party updated successfully',
        });
        history.push('/all-parties');
      return dispatch({ type: EDIT_PARTY_SUCCESS, payload: name.data });
    }
    if(name.status === 400) {
      swal({
        icon: 'warning',
        title: name.error,
      });
      dispatch({
        type: EDIT_PARTY_FAILURE,
        payload: name.error,
      });
    }

    });
  } catch(err){
    dispatch({
      type: EDIT_PARTY_FAILURE,
      payload: name.error,
    });
    }
  };
