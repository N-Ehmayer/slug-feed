import axios from 'axios';

export function fetchSession() {
  return function(dispatch) {
    axios.get('/api/session')
      .then(response => dispatch({type: 'FETCH_SESSION_SUCCESS', payload: response.data}))
      .catch(err => dispatch({type: 'FETCH_SESSION_FAILURE', payload: err}));
  }
}
