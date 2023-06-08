import React from "react";

const RefFunction = () => {
  return (
    <div>
      <p>`${timer}s`</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default RefFunction;
