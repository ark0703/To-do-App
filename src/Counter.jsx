import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const resetCount = () => setCounter(0);

  const incrCount = () => setCounter(counter + 1);
  const decrCount = () => setCounter(counter - 1);

  return (
    <div className="counter">
      <h1 className="count">{counter}</h1>
      <div className="buttons">
        <button className="incr btn" onClick={incrCount}>
          Increment
        </button>
        <button className="reset btn" onClick={resetCount}>
          Reset
        </button>
        <button className="decr btn" onClick={decrCount}>
          decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
