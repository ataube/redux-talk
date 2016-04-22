export const INCREMENT_BY = 'INCREMENT_BY';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC_REQUEST = 'INCREMENT_ASYNC_REQUEST';
export const INCREMENT_ASYNC_SUCCESS = 'INCREMENT_ASYNC_SUCCESS';

const action = (type, payload) => (payload ? { type, payload } : { type });

export const incrementBy = function incrementBy(value = 1) {
  return action(
    INCREMENT_BY,
    !isNaN(value) ? value : 0
  );
};

export const decrement = function decrement() {
  return action(DECREMENT);
};

export const asyncIncrement = function asyncIncrement(value = 1) {
  return function thunk(dispatch) {
    dispatch(action(INCREMENT_ASYNC_REQUEST));

    setTimeout(() => dispatch(
      action(INCREMENT_ASYNC_SUCCESS, value)),
      2000
    );
  };
};
