import React, { useState } from 'react';
import {
  Button,
  Col,
  Input,
  Row,
} from 'react-materialize';

const AddGameForm = ({ onAddGame }) => {
  const [newGameTitle, setNewGameTitle] = useState('');

  const handleChangeText = (event) => {
    setNewGameTitle(event.target.value);
  }

  const handleAddGame = (event) => {
    event.preventDefault();
    onAddGame(newGameTitle);
    setNewGameTitle('');
  }

  return <form onSubmit={handleAddGame}>
    <Row>
      <Input
        label="New Game Title"
        value={newGameTitle}
        onChange={handleChangeText}
        s={12} m={10} l={11}
      />
      <Col s={12} m={2} l={1}>
        <Button>Add</Button>
      </Col>
    </Row>
  </form>;
}

export default AddGameForm;
