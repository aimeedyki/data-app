import { combineReducers } from 'redux';
import {
  LOG_IN,
  LOG_OUT,
} from './actions';

export function loggedIn(state = false, action) {
  switch (action.type) {
    case LOG_IN:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  loggedIn,
});
