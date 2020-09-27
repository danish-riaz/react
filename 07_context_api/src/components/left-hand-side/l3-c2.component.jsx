import React, { useContext } from 'react';
import L4C1 from './l4-c1.component';
import L4C2 from './l4-c2.component';
import TreeContext from '../../context/treeContext';

const L3C2 = (props) => {
  const value = useContext(TreeContext);
  return (
    <>
      <p>L3 C2</p>
      <TreeContext.Provider value={{ ...value, other: 'value changed in b/w' }}>
        <L4C1 />
        <L4C2 />
      </TreeContext.Provider>
    </>
  );
};

export default L3C2;
