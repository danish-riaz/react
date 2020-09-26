import React, { useState } from 'react';
import './App.css';
import Light from './components/light/light.component';
import User from './components/user/user.component';

function App() {
  const [light, setlight] = useState(true);
  const [users, setusers] = useState(true);
  return (
    <div className="App">
      {console.log('[App] Rendering')}
      <h1>Hooks In React</h1>
      <button onClick={() => setlight(!light)}>
        {light ? 'Remove Light Component' : 'Add Light Component'}
      </button>{' '}
      <button onClick={() => setusers(!users)}>
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
