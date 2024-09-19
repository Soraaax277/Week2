import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="page-content">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className="btn">Increase</button>
        <button onClick={() => setCount(count - 1)} className="btn">Decrease</button>
        <button onClick={() => setCount(0)} className="btn reset">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
