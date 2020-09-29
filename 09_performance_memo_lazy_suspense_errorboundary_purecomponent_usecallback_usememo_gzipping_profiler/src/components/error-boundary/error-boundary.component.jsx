import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    //process the error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Error', error);
    console.log('infor', info);
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Something went wrong...</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundary;
