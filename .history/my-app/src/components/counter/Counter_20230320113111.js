import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(function delay() {
      setCount(count + 1);
    });
  };
  return <div onClick={handleIncrement}>Increment</div>;
};

export default Counter;
