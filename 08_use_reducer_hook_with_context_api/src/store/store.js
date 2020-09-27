import React, { createContext, useReducer } from 'react';

const initialState = {
  light: true,
  users: true,
};
const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOOGLE_LIGHT':
      return {
        ...state,
        light: !state.light,
      };
    case 'TOOGLE_USERS':
      return {
        ...state,
        users: !state.users,
      };
    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
