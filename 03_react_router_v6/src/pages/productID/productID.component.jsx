import React from 'react';

import { useParams } from 'react-router-dom';

const ProductID = (props) => {
  let { productID } = useParams();
  return <h1>ProductID {productID} </h1>;
};

export default ProductID;
