import React, { Component } from 'react';

export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor !');
    this.state = {
      someState: '',
    };
  }

  componentDidMount() {
    console.log('Component Did Mount!');
    // this.setState({ someState: 'Changing State/Causing Side Effect' });
  }

  shouldComponentUpdate() {
    console.log('Should Component Update !');
    return true;
  }

  componentDidUpdate() {
    console.log('Component Did Update!');
    return true;
  }

  componentWillUnmount() {
    console.log('Component Will Unmount !');
  }

  render() {
    return (
      <div>
        {console.log('Rendering !')}
        <h1>React Life Cycle Hooks</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
