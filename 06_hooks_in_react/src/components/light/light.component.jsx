import React, { useState } from 'react';

const Light = () => {
  const [toogle, setToogle] = useState(true);
  return (
    <div>
      {console.log('[Light] Rendering')}
      <h2>Light : {toogle ? 'On' : 'Off'}</h2>
      <button onClick={() => setToogle(!toogle)}>Toogle</button>
    </div>
  );
};

export default Light;
