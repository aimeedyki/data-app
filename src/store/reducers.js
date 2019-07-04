import { combineReducers } from 'redux';
import games from './games/reducers';
import login from './login/reducers';

export default combineReducers({
  games,
  login
});
