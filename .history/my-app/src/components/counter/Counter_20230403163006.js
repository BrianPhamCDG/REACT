import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button>Increase</button>
    </div>
  );
};

export default Counter;
