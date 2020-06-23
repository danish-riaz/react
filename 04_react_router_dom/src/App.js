import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

const Home = (props) => {
  console.log(props);
  console.log(`${props.match.url}products`);
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/products">Product</Link>
      <br />
      <button onClick={() => props.history.push('/products')}>Products</button>
      <h1>HOME</h1>
    </div>
  );
};

const Product = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Products</h1>
      <Link to={`${props.match.url}/48`}>Product 48</Link>
      <br />
      <Link to={`${props.match.url}/24`}>Product 24</Link>
      <br />
      <Link to={`${props.match.url}/16`}>Product 16</Link>
      <br />
    </div>
  );
};

const ProductDetails = (props) => {
  console.log(props.match.params.productId);
  console.log(props.match.url);
  console.log(props.match.path);
  console.log(props);
  return (
    <div>
      <h1>Product Details {props.match.params.productId}</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/adsfag/gsfagsdf/products" component={Product} />
      <Route
        path="/adsfag/gsfagsdf/products/:productId"
        component={ProductDetails}
      /> */}
      <Route exact path="/products" component={Product} />
      <Route path="/products/:productId" component={ProductDetails} />
    </div>
  );
}

export default App;
