import axios from 'axios'

export function fetchArticles() {
  return function(dispatch) {
    axios.get('http://localhost:3000/api/articles')
      .then((response) => {
        console.log(response);
        dispatch({type: 'FETCH_ARTICLES_SUCCESS', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_ARTICLES_FAILURE', payload: err})
      })

  }
}
