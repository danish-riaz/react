import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App({ value, increment, decrement }) {
  return (
    <div className="App">
      <h1>React Redux </h1>
      <hr />
      <h2>Value = {value}</h2>
      <button className="btn" onClick={increment}>
        {' '}
        +{' '}
      </button>
      <br />
      <br />
      <button className="btn" onClick={decrement}>
        {' '}
        -{' '}
      </button>
    </div>
  );
}

const mapStoreToProps = (state) => ({
  value: state.slice.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStoreToProps, mapDispatchToProps)(App);
