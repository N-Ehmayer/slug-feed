export default function articlesByTagReducer(state={
  articlesByTag: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

  switch (action.type) {
    case "FETCH_ARTICLES_BY_TAG": {
      return {...state, fetching: true}
    }
    case "FETCH_ARTICLES_BY_TAG_FAILURE": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_ARTICLES_BY_TAG_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        articlesByTag: action.payload,
      }
    }
    default: return state
  }
}