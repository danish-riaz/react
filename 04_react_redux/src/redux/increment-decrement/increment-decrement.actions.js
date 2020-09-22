export const INITIAL_STATE = {
  value: 0,
};

export const increment = (state) => {
  return {
    ...state,
    value: state.value + 1,
  };
};

export const decrement = (state) => {
  return {
    ...state,
    value: state.value - 1,
  };
};
