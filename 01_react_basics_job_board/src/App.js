import React, { Component } from 'react';
import { CardList } from './components/card-list/car-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      serachField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  changeHandler = (e) => {
    this.setState({ serachField: e.target.value });
  };

  render() {
    const { users, serachField } = this.state;
    const filteredUser = users.filter((user) =>
      user.name.toLowerCase().includes(serachField)
    );
    return (
      <div className="App">
        <div className="TopBar">
          <h1>In-demand talent on demand</h1>
          <SearchBox changeHandler={this.changeHandler} />
        </div>
        <CardList users={filteredUser} />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
