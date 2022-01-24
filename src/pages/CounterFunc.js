import React, { useState } from 'react';

const CounterFunc = () => {
  //make a counter function
  const [count, setCount] = useState(0);
  // done
  return (
    <div>
      <p>{count} </p>
      <p> {count}</p>
      <p> {count + 1 + 1}</p>
      <p> {count + 1 + 1 + 1}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default CounterFunc;
