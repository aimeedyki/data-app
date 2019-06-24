import React from 'react';
import {
  Button,
  Col,
  Collection,
  CollectionItem,
  Row
} from 'react-materialize';
import AddGameForm from './AddGameForm';
import './GameList.css'

const GameList = ({
  games,
  addGame,
  logOut
}) => {
  return <Row>

    <Button className="black cyan-text col offset-l11" onClick={logOut}>
      Log Out
    </Button>

    <Col  s={12} m={10} l={6} offset="m1 l3" className="cyan game-content">
      <Collection className="col l6 offset-l2 collection--style" header="Video Games">
        {games.map((game) => (
          <CollectionItem className="grey darken-4 white-text" key={game}>{game}</CollectionItem>
        ))}
      </Collection>
      <AddGameForm onAddGame={addGame} />

    </Col>
  </Row>;
};

export default GameList;
