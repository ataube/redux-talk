/* eslint-disable no-console */
import { createStore } from 'redux';
import { incrementBy, decrement } from './actions';
import counter from './reducers';

const store = createStore(counter, { counter: 0 });

const view = document.getElementById('counterView');
const incrementByButton = document.getElementById('increment_by');
const decrementButton = document.getElementById('decrement');
const input = document.getElementById('input');

store.subscribe(() => {
  const state = store.getState();
  view.innerHTML = state.counter;
});

decrementButton.onclick = () => store.dispatch(decrement());

incrementByButton.onclick = () => {
  store.dispatch(incrementBy(parseInt(input.value, 0)));
};

store.dispatch(incrementBy());
