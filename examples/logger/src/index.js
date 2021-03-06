import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { incrementBy, decrement } from './actions';
import counter from './reducers';

const logger = createLogger();

const store = createStore(counter, { counter: 0 }, applyMiddleware(
  logger
));

const view = document.getElementById('counterView');
const incrementByButton = document.getElementById('increment_by');
const decrementButton = document.getElementById('decrement');
const input = document.getElementById('input');

store.subscribe(() => {
  const state = store.getState();
  view.innerHTML = state.counter;
});

decrementButton.addEventListener('click', () => store.dispatch(decrement()));
incrementByButton.addEventListener('click', () => {
  store.dispatch(incrementBy(parseInt(input.value, 0)));
});

store.dispatch(incrementBy());
