import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';

import './App.css';

const Hats = () => <h1>Hats</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
