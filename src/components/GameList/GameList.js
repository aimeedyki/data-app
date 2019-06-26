import React, { useEffect } from 'react';
import {
  Button,
  Col,
  Collection,
  CollectionItem,
  Row
} from 'react-materialize';
import AddGameForm from './AddGameForm';
import LoadingIndicator from 'components/LoadingIndicator';
import './GameList.css'

const GameList = ({
  addGame,
  error,
  games,
  loadGames,
  loading,
  logOut,
}) => {

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return <Row>
    <Button className="black cyan-text col offset-l11" onClick={logOut}>
      Log Out
    </Button>
    <LoadingIndicator loading={loading} error={error}>
      <Col s={12} m={10} l={6} offset="m1 l3" className="cyan game-content">
        <Collection className="col l6 offset-l2 collection--style" header="Video Games">
          {games.map((game) => (
            <CollectionItem className="grey darken-4 white-text" key={game.id}>
              {game.attributes.title}
            </CollectionItem>
          ))}
        </Collection>
        <Button className="black white-text" onClick={()=>loadGames()}>Reload</Button>
        <AddGameForm onAddGame={addGame} />
      </Col>
    </LoadingIndicator>
  </Row>;
};

export default GameList;
