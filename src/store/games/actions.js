import generateUuid from 'uuid/v4';
import api from '../api';

export const ADD_GAME = 'ADD_GAME';
export const GAME_PERSISTED = 'GAME_PERSISTED';
export const QUEUE_GAME_TO_ADD = 'QUEUE_GAME_TO_ADD';
export const RECORD_ERROR = 'RECORD_ERROR';
export const START_LOADING = 'START_LOADING';
export const STORE_GAMES = 'STORE_GAMES';

export const loadGames = () => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const { data: responseBody } = await api.get('/games');
    dispatch({
      type: STORE_GAMES,
      games: responseBody.data,
    });
  } catch {
    dispatch({ type: RECORD_ERROR });
  }
};

export const addGame = (title) => async (dispatch) => {
  const uuid = generateUuid();
  const game = {
    type: 'games',
    id: uuid,
    attributes: { title },
  };
  dispatch({
    type: QUEUE_GAME_TO_ADD,
    game,
  });
  await persistGame(dispatch, game);
};

export const addQueuedGames = () => async (dispatch, getState) => {
  const { games: { gamesToAdd } } = getState();
  for (const uuid in gamesToAdd) {
    const game = gamesToAdd[uuid];
    await persistGame(dispatch, game);
  };
};

const persistGame = async (dispatch, game) => {
  dispatch({
    type: ADD_GAME,
    game,
  });
  const { data: responseBody } = await api.post('/games', { data: game });
  dispatch({
    type: GAME_PERSISTED,
    game: responseBody.data,
  });
};
