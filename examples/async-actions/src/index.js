import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { incrementBy, decrement, asyncIncrement } from './actions';
import counter from './reducers';

const logger = createLogger();

const store = createStore(counter, { counter: 0 }, applyMiddleware(
  thunk, logger
));

const view = document.getElementById('counterView');
const incrementByButton = document.getElementById('increment_by');
const decrementButton = document.getElementById('decrement');
const asyncIncrementButton = document.getElementById('async_increment');
const input = document.getElementById('input');

store.subscribe(() => {
  const state = store.getState();
  view.innerHTML = state.counter;
});

decrementButton.addEventListener('click', () => store.dispatch(decrement()));
incrementByButton.addEventListener('click', () => {
  store.dispatch(incrementBy(parseInt(input.value, 0)));
});
asyncIncrementButton.addEventListener('click', () => store.dispatch(asyncIncrement(1)));

store.dispatch(incrementBy());
