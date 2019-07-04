import React from 'react';
import { Provider } from 'react-redux';
import { Row } from 'react-materialize';
import { PersistGate } from 'redux-persist/integration/react';
import Auth from 'components/Auth';
import GameList from 'components/GameList';
import { store, persistor } from 'store';
import 'App.css'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Row className="grey darken-4 app-layout">
        <Auth>
          <GameList />
        </Auth>
      </Row>
    </PersistGate>
  </Provider>
);

export default App;
