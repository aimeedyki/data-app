import React from 'react';
import { Provider } from 'react-redux';
import { Col, Row } from 'react-materialize';
import Auth from 'components/Auth';
import GameList from 'components/GameList';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Row>
      <Col s={12} m={10} l={8} offset="m1 l2">
        <Auth>
          <GameList />
        </Auth>
      </Col>
    </Row>
  </Provider>
);

export default App;
