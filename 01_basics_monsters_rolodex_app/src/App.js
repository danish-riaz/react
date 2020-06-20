import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = [
      {
        name: 'Dragon',
        id: 'hf3s',
      },
      {
        name: 'Goblin',
        id: 'hd78c',
      },
      {
        name: 'Grendel',
        id: 'asd23dsa',
      },
      {
        name: 'Kraken',
        id: 'dsf342sdf',
      },
    ];
  }

  render() {
    return (
      <div className="App">
        {this.state.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
