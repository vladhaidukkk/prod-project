import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((value) => value - 1);
  }

  function increment() {
    setCount((value) => value + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <div className="actions">
        <button type="button" className="btn" onClick={decrement}>
          dec
        </button>
        <button type="button" className="btn" onClick={increment}>
          inc
        </button>
      </div>
    </div>
  );
};
