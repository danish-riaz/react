import React, { useState, Profiler } from 'react';
import Person from './components/person/person.component';
import './App.css';

const App2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>I'm App Now</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>
      <Profiler
        id="1"
        onRender={(id, phase, actualDuration) =>
          console.log({
            id,
            phase,
            actualDuration,
          })
        }
      >
        <Person />
      </Profiler>
    </div>
  );
};

export default App2;
