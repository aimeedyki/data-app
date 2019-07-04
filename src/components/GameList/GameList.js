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
  addQueuedGames,
  error,
  games,
  loadGames,
  loading,
  logOut,
}) => {

  useEffect(() => {
    loadGames()
      .then(addQueuedGames);
  }, [addQueuedGames, loadGames]);

  return <Row className="game-page">
    <div className="nav-bar">
      <Button className="black cyan-text " onClick={logOut}>
        Log Out
      </Button>
    </div>
    <div className="list-section">
      <LoadingIndicator loading={loading} error={error}>
        <Col className="cyan game-content">
          <Collection className="collection--style" header="Video Games">
            {games.map((game) => (
              <CollectionItem className="game-color white-text" key={game.id}>
                {game.attributes.title}
              </CollectionItem>
            ))}
          </Collection>
          <Button className="game-color white-text" onClick={() => loadGames()}>Reload</Button>
          <AddGameForm onAddGame={addGame} />
        </Col>
      </LoadingIndicator>
    </div>
  </Row>;
};

export default GameList;
