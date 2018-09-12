import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer.js';

const configureStore = (presetConfig) => {
  return createStore(RootReducer, presetConfig, applyMiddleware(thunk));
};

export default configureStore;
