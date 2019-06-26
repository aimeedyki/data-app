import api from '../api';

export const ADD_GAME = 'ADD_GAME';
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
  const game = {
    type: 'games',
    attributes: { title },
  };
  const { data: responseBody } = await api.post('/games', { data: game });
  dispatch({
    type: ADD_GAME,
    game: responseBody.data,
  });
};
