import React, { useContext } from 'react';
import L2C1 from './l2-c1.component';
import TreeContext from '../../context/treeContext';

const LeftL1C1 = (props) => {
  const treeObj = useContext(TreeContext);
  return (
    <>
      {console.log(treeObj)}
      <p>Left L1 C1 </p>
      <L2C1 />
    </>
  );
};

export default LeftL1C1;
