export default function articleReducer(state={
  articles: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_ARTICLES": {
      return {...state, fetching: true}
    }
    case "FETCH_ARTICLES_FAILURE": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_ARTICLES_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        articles: action.payload,
      }
    }
    default: return state
  }
}
