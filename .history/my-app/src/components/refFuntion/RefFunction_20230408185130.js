import React, { useEffect } from "react";

const RefFunction = () => {
  const [count, setCount] = React.useState(0);
  const timerRef = React.useRef(null);
  const handleStart = () => {};
  const handleStop = () => {};

  useEffect(() => {});
  return (
    <div className="text-center relative top-[400px]">
      <p className="text-6xl">Timer: {count}s</p>
      <button
        className="text-2xl py-4 px-6 rounded-md bg-red-300"
        onClick={handleStart}
      >
        Start
      </button>
      <button
        className="text-2xl py-4 px-6 rounded-md bg-red-300"
        onClick={handleStop}
      >
        Stop
      </button>
    </div>
  );
};

export default RefFunction;
