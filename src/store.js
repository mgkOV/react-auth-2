import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducer from './reducers';
import { loadData, saveData } from './helpers';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
