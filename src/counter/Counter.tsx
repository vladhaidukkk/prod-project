import { useState } from 'react';
import styles from './Counter.module.scss';

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
      <div className={styles.actions}>
        <button type="button" className={styles.btn} onClick={decrement}>
          dec
        </button>
        <button type="button" className={styles.btn} onClick={increment}>
          inc
        </button>
      </div>
    </div>
  );
};
