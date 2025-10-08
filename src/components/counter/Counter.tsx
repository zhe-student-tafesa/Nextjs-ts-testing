"use client";
import React, { useState } from "react";
import styles from "./counter.module.css";

interface Props {
  initilValue?: number;
}

const Counter = ({ initilValue = 0 }: Props) => {
  const [counter, setcounter] = useState(initilValue);
  const increase = () => setcounter(counter + 1);
  const decrease = () => setcounter(counter - 1);
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p data-id="counter-number">{counter}</p>
      </div>
      <div className={styles.buttons}>
        <button data-id="plus-count-btn" onClick={increase} className={styles.buttonCount}> + 1</button>
        <button data-id="minus-count-btn"onClick={decrease} className={styles.buttonCount}> - 1</button>
      </div>
    </div>
  );
};

export default Counter;
