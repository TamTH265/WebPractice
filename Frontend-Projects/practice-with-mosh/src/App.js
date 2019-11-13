import React from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
      ],
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrease(counterId) {
    return () => {
      const { counters } = this.state;
      const countersLength = counters.length;
      for (let i = 0; i < countersLength; i++) {
        if (counters[i].id === counterId) {
          counters[i].value += 1;
          break;
        }
      }
      this.setState({ counters });
    };
  }

  handleDelete(counterId) {
    return () => {
      const { counters } = this.state;
      const updatedCounters = counters.filter(
        (counter) => counter.id !== counterId,
      );
      this.setState({ counters: updatedCounters });
    };
  }

  handleReset() {
    const { counters } = this.state;
    const resetCounters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: resetCounters });
  }

  render() {
    const { counters } = this.state;
    return (
      <>
        <Navbar countersTotal={counters.filter((counter) => counter.value > 0).length} />
        <main className="container">
          <Counters
            counters={counters}
            handleIncrease={this.handleIncrease}
            handleDelete={this.handleDelete}
            handleReset={this.handleReset}
          />
        </main>
      </>
    );
  }
}

export default App;
