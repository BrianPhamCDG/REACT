import React, { useEffect } from "react";

const RefFunction = () => {
  const [count, setCount] = React.useState(0);
  const timerRef = React.useRef(null);
  const handleStart = () => {};
  const handleStop = () => {};

  useEffect(() => {
    timerRef;
  });
  return (
    <div className="text-center relative top-[400px] text-6xl">
      <p>Timer: {count}s</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default RefFunction;
