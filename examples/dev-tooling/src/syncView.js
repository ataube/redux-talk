import { incrementBy, decrement, asyncIncrement } from './actions';

export default (store) => {
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

  view.innerHTML = store.getState().counter || 0;
};
