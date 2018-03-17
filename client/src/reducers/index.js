import { combineReducers } from 'redux';
import articles from './articleReducer';
import session from './sessionReducer';

export default combineReducers({
  articles,
  session
})
