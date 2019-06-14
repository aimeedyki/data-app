import React from 'react';
import {
  Collection,
  CollectionItem,
} from 'react-materialize';

const GameList = ({
  games,
}) => {
  return <div>
    <Collection header="Video Games">
      { games.map((game) => (
        <CollectionItem key={game}>{game}</CollectionItem>
      )) }
    </Collection>
  </div>;
};

export default GameList;
