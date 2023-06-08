import React, { useEffect } from "react";

const RefFunction = () => {
  const [count, setCount] = React.useState(0);
  const timerRef = React.useRef(null);
  const handleStart = () => {
    setInterval(() => {
      setCount;
    }, 1000);
  };
  const handleStop = () => {};

  useEffect(() => {});
  return (
    <div className="text-center relative top-[400px]">
      <p className="text-6xl">Timer: {count}s</p>
      <button
        className="text-2xl py-2 px-8 mx-6 rounded-md bg-red-200 mt-6"
        onClick={handleStart}
      >
        Start
      </button>
      <button
        className="text-2xl py-2 px-8 rounded-md bg-red-200 mt-6"
        onClick={handleStop}
      >
        Stop
      </button>
    </div>
  );
};

export default RefFunction;
