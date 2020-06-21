import React, { Component } from 'react';

import { LifeCycle } from './life-cycle.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      shouldShow: false,
      message: '',
    };
  }

  handleChangeToggel = (e) => {
    e.preventDefault();
    this.setState((preState, preProps) => {
      return {
        shouldShow: !preState.shouldShow,
      };
    });
  };

  handleChangeMessage = (e) => {
    e.preventDefault();
    this.setState((preState, preProps) => {
      return {
        message: preState.message + '_Hello',
      };
    });
  };

  render() {
    return (
      <div className="App">
        <br />
        <button onClick={this.handleChangeToggel}>Toggle Component</button>
        <br />
        <br />
        <button onClick={this.handleChangeMessage}>Add Text</button>
        {this.state.shouldShow ? (
          <LifeCycle message={this.state.message} />
        ) : null}
      </div>
    );
  }
}

export default App;
