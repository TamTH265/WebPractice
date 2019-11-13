import React, { Component } from 'react';

import CounterContext from '../contexts/CounterContext';

class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.counterId = setInterval(
      () => {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 })
      }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  render() {
    const { counter } = this.state;
    return (
      <CounterContext.Provider value={counter}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterProvider;
