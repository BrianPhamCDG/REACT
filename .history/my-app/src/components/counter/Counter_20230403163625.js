import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="block text-center p-[400px]">
      <p className="p-[20px] text-2xl">{count}</p>
      <button className="rounded-md px-8 py-4 bg-blue-600 text-white font-semibold inline-block">
        Increase
      </button>
    </div>
  );
};

export default Counter;
