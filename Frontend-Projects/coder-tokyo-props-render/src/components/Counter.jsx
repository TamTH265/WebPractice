import React, { useContext } from 'react';

import CounterContext from '../contexts/CounterContext';

const Counter = () => {
  const context = useContext(CounterContext);
  return <h1>{context}</h1>;
}

export default Counter;
