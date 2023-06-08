import React, { useEffect } from "react";

const StopWatch = () => {
  const [count, setCount] = React.useState(0);
  const timerRef = React.useRef(null);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div className="text-center relative top-[400px]">
      <p className="text-6xl">Timer: {count}s</p>
      <button
        className="text-2xl py-2 px-8 mx-6 rounded-md bg-blue-250 mt-6"
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

export default StopWatch;
