import React, { useContext } from 'react';
import TreeContext from '../../context/treeContext';

const L7C1 = (props) => {
  const { message, other } = useContext(TreeContext);

  return (
    <>
      {console.log(message)}
      {console.log(other)}
      <p>L7 C1</p>
    </>
  );
};

export default L7C1;
