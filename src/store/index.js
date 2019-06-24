import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'video-games',
  storage,
};
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  devToolsEnhancer(),
);

const persistor = persistStore(store);

export { store, persistor };
