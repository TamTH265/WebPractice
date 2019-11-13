import React from 'react';
import './App.css';

import CounterProvider from './components/CounterProvider';
import Counter from './components/Counter';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
