import React from "react";

const RefFunction = () => {
  const timerRef = React.useRef(0);
  const handleTime = setInterval(() => {
    timerRef.current++;
  }, 1000);
  return (
    <div className="text-clip">
      <p>{handleTime}s</p>
      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> */}
    </div>
  );
};

export default RefFunction;
