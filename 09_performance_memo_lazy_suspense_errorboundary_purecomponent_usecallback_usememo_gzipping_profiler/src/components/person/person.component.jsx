import React, { memo } from 'react';

const Person = () => {
  console.log('[Person] Rendering');
  return <h1>I'm a person component.</h1>;
};

export default memo(Person);
