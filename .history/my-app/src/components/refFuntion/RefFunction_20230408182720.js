import React from "react";

const RefFunction = () => {
  const timerRef = useRef(0);
  const handleTime = setInterval(() => {
    timerRef.current++;
  }, 1000);
  return (
    <div>
      <p>`${handleTime}s`</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default RefFunction;
