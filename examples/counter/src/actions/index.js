export const INCREMENT_BY = 'INCREMENT_BY';
export const DECREMENT = 'DECREMENT';

export const incrementBy = function incrementBy(value = 1) {
  return {
    type: INCREMENT_BY,
    payload: !isNaN(value) ? value : 0,
  };
};

export const decrement = function decrement() {
  return {
    type: DECREMENT,
  };
};
