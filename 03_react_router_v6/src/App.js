import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import ProductID from './pages/productID/productID.component';
import Product from './pages/product/product.component';
import ProductInvioce from './pages/product-invoice/product-invoice.component';
import PageNotFound from './pages/page-not-found/page-not-found.component';

import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/homepage">HomePage</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/product">Product</Link>

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="/:productID" element={<ProductID />} />
          <Route path="/invoice" element={<ProductInvioce />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
