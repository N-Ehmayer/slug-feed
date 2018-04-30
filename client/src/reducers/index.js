import { combineReducers } from 'redux';
import articles from './articleReducer';
import session from './sessionReducer';
import articlesByTag from './articlesByTagReducer'

export default combineReducers({
  articles,
  articlesByTag,
  session
})
