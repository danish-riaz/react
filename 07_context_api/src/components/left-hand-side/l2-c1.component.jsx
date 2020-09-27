import React from 'react';
import L3C1 from './l3-c1.component';
import L3C2 from './l3-c2.component';
import L3C3 from './l3-c3.component';

const L2C1 = (props) => {
  return (
    <>
      <p>L2 C1</p>
      <L3C1 />
      <L3C2 />
      <L3C3 />
    </>
  );
};

export default L2C1;
