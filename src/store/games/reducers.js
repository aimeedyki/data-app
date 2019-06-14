import { combineReducers } from 'redux';
import {
  ADD_GAME,
} from './actions';

const initialData = [
  'Fallout 3',
  'Final Fantasy 7',
];

export function games(state = initialData, action) {
  switch (action.type) {
    case ADD_GAME:
      return [action.title, ...state];
    default:
      return state;
  }
}

export default combineReducers({
  games,
});
