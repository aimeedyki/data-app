import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import {
  addGame,
  addQueuedGames,
  loadGames
  } from 'store/games/actions';
import { logOut } from 'store/login/actions';
import GameList from './GameList';

function mapStateToProps(state) {
  return pick(state.games, [
    'games',
    'loading',
    'error',
  ]);
}

const mapDispatchToProps = {
  addGame,
  addQueuedGames,
  loadGames,
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
