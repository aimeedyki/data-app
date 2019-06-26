import { combineReducers } from 'redux';
import {
  ADD_GAME,
  RECORD_ERROR,
  START_LOADING,
  STORE_GAMES
} from './actions';
import { logOut } from 'store/login/actions';

export function games(state = [], action) {
  switch (action.type) {
    case ADD_GAME:
      return [action.game, ...state];
    case STORE_GAMES:
      return action.games;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_GAMES:
    case RECORD_ERROR:
      return false;
    default:
      return state;
  }
}

export function error(state = false, action) {
  switch (action.type) {
    case RECORD_ERROR:
      return true;
    case STORE_GAMES:
      return false;
    default:
      return state;
  }
}


export default combineReducers({
  games,
  loading,
  error,
  logOut
});
