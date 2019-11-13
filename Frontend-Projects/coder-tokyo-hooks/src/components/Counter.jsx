import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
