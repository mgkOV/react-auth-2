import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducer from './reducers';
import { loadData, persistData } from './helpers';

const middleware = [thunk];
const persistedState = loadData('state_fitness');
const initialState = Object.assign({}, persistedState);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    persistData('state_fitness', {
      auth: { authenticated: store.getState().auth.authenticated }
    });
  }, 1000)
);

export default store;
