import { INCREMENT_BY, DECREMENT, INCREMENT_ASYNC_SUCCESS } from '../actions';

const defaultState = { counter: 0 };

function counter(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_BY:
    case INCREMENT_ASYNC_SUCCESS:
      return { counter: state.counter + action.payload };
    case DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export default counter;
