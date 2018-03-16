export default function sessionReducer(state={
  user: undefined,
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_SESSION": {
      return {...state, fetching: true}
    }
    case "FETCH_SESSION_FAILURE": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_SESSION_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }
    default: return state
  }
}
