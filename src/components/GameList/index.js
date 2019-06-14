import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import GameList from './GameList';

function mapStateToProps(state) {
  return pick(state.games, [
    'games',
  ]);
}

export default connect(mapStateToProps)(GameList);
