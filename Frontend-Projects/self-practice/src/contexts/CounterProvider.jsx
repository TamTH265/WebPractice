import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CounterContext from './CounterContext';

class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
      ],
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddCounter = this.handleAddCounter.bind(this);
  }

  handleAddCounter() {
    const { counters } = this.state;
    const lastId = counters[counters.length - 1].id;
    const newCounter = { id: lastId + 1, value: 0 };
    counters.push(newCounter);
    this.setState({ counters });
  }

  handleIncrement(id) {
    return () => {
      const { counters } = this.state;
      const tmpCounters = counters.map((counter) => {
        if (counter.id === id) {
          counter.value += 1;
        }
        return counter;
      });
      this.setState({ counters: tmpCounters });
    };
  }

  handleDecrement(id) {
    return () => {
      const { counters } = this.state;
      const tmpCounters = counters.map((counter) => {
        if (counter.id === id) {
          if (counter.value > 0) {
            counter.value -= 1;
          }
        }
        return counter;
      });
      this.setState({ counters: tmpCounters });
    };
  }

  handleDelete(id) {
    return () => {
      const { counters } = this.state;
      const tmpCounters = counters.filter((counter) => counter.id !== id);
      this.setState({ counters: tmpCounters });
    };
  }

  handleReset() {
    const { counters } = this.state;
    const tmpCounters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: tmpCounters });
  }

  render() {
    const { counters } = this.state;
    const { children } = this.props;
    return (
      <CounterContext.Provider value={{
        counters,
        handleIncrement: this.handleIncrement,
        handleDecrement: this.handleDecrement,
        handleDelete: this.handleDelete,
        handleReset: this.handleReset,
        handleAddCounter: this.handleAddCounter,
      }}
      >
        {children}
      </CounterContext.Provider>
    );
  }
}

CounterProvider.propTypes = { children: PropTypes.instanceOf(Object).isRequired };

export default CounterProvider;
