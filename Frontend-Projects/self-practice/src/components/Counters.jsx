import React from 'react';
import { Button } from 'reactstrap';

import Counter from './Counter';
import CounterContext from '../contexts/CounterContext';

const Counters = () => (
  <CounterContext.Consumer>
    {(context) => {
      const {
        counters,
        handleIncrement,
        handleDecrement,
        handleDelete,
        handleAddCounter,
        handleReset,
      } = context;
      return (
        <>
          <Button onClick={handleAddCounter} type="button" color="primary" className="m-2">Add Counter</Button>
          <Button onClick={handleReset} type="button" color="info" className="m-2">Reset</Button>
          {
            counters.map((counter) => (
              <Counter
                key={counter.id}
                value={counter.value}
                onIncrease={handleIncrement(counter.id)}
                onDecrease={handleDecrement(counter.id)}
                onDelete={handleDelete(counter.id)}
              />
            ))
          }
        </>
      );
    }}
  </CounterContext.Consumer>
);

export default Counters;
