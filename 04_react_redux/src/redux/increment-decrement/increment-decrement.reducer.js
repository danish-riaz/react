import {
  INITIAL_STATE,
  increment,
  decrement,
} from './increment-decrement.actions';

const incDes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return increment(state);
    case 'DECREMENT':
      return decrement(state);
    default:
      return state;
  }
};

export default incDes;
