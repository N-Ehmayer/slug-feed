import axios from 'axios';

export function fetchArticlesByTag(param) {
  return function(dispatch) {
    axios.get(`/api/tag/${param}`)
      .then(response => dispatch({type: 'FETCH_ARTICLES_BY_TAG_SUCCESS', payload: response.data}))
      .catch(err => dispatch({type: 'FETCH_ARTICLES_BY_TAG_FAILURE', payload: err}));
  }
}
