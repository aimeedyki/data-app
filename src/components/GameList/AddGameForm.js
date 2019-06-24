import React, { useState } from 'react';
import {
  Button,
  Col,
  Input,
  Row,
} from 'react-materialize';
import './AddGameForm.css';

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
        className="input--style"
        label="New Game Title"
        value={newGameTitle}
        onChange={handleChangeText}
        s={12} m={10} l={8}
      />
      <Col s={12} m={2} l={1} className="button--style">
        <Button className="black white-text">Add</Button>
      </Col>
    </Row>
  </form>;
}

export default AddGameForm;
