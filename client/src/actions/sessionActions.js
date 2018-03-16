import axios from 'axios'

export function fetchSession() {
  return function(dispatch) {
    axios.get('http://localhost:3000/api/session')
      .then((response) => {
        console.log(response);
        dispatch({type: 'FETCH_SESSION_SUCCESS', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_SESSION_FAILURE', payload: err})
      })

  }
}
