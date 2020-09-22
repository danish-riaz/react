import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <Link to="18">Product 18</Link>
      <br />
      <Link to="invoice">Product Invoice</Link>
      {/* The componet will be render here  */}
      <Outlet />
    </div>
  );
};

export default Product;
