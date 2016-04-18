import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import counter from './reducers';
import syncView from './syncView';

const logger = createLogger();

const store = createStore(counter, { counter: 0 }, compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

syncView(store);
