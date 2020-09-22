import { combineReducers } from 'redux';
import incDes from './increment-decrement/increment-decrement.reducer';

const rootReduce = combineReducers({
  slice: incDes,
});

export default rootReduce;
