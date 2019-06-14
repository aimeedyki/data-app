import React, { useState } from 'react';
import { get } from 'lodash-es';
import {
  Button,
  Col,
  Input,
  Row,
} from 'react-materialize';
import api from 'store/api';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (setField) => (event) => {
    setField(event.target.value);
    setError(false);
  }

  const logIn = (event) => {
    event.preventDefault();

    api.post('/oauth/token', {
      grant_type: 'password',
      username: email,
      password,
    }).then(() => {
      onLoginSuccess();
    }).catch((error) => {
      const message = get(
        error,
        'response.data.error_description',
        'An error occurred while logging in. Please try again.',
      );
      setError(message);
    });
  }

  return (
    <form onSubmit={logIn}>
      {error ? <p>{error}</p> : null}
      <Row>
        <Input
          label="Email"
          value={email}
          onChange={handleChange(setEmail)}
          s={12}
        />
      </Row>
      <Row>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={handleChange(setPassword)}
          s={12}
        />
      </Row>
      <Row>
        <Col>
          <Button>Log In</Button>
        </Col>
      </Row>
    </form>
  );
};

export default LoginForm;
