import React, { useContext } from 'react';
import './App.css';
import Light from './components/light/light.component';
import User from './components/user/user.component';
import { store } from './store/store';

function App() {
  const { state, dispatch } = useContext(store);
  const { light, users } = state;
  return (
    <div className="App">
      {console.log('[App] Rendering')}
      <h1>Hooks In React</h1>
      <button onClick={() => dispatch({ type: 'TOOGLE_LIGHT' })}>
        {light ? 'Remove Light Component' : 'Add Light Component'}
      </button>{' '}
      <button onClick={() => dispatch({ type: 'TOOGLE_USERS' })}>
        {users ? 'Remove User Component' : 'Add User Component'}
      </button>
      <hr />
      <h3>useState Hook</h3>
      {light ? <Light /> : null}
      <hr />
      <h3>useEffect Hook</h3>
      {users ? <User /> : null}
    </div>
  );
}

export default App;
