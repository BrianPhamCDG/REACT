import React, { useEffect } from "react";

const RefFunction = () => {
  const timerRef = React.useRef(0);
  const handleTime = setInterval(() => {
    timerRef.current++;
    console.log(timerRef.current);
  }, 1000);

  useEffect(() => {
    RefFunction;
  });
  return (
    <div className="text-center relative top-[400px] text-6xl">
      <p>{handleTime}s</p>
      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> */}
    </div>
  );
};

export default RefFunction;
