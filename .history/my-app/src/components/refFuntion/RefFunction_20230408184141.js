import React, { useEffect } from "react";

const RefFunction = () => {
  const [count, setCount] = React.useState(0);
  const timerRef = React.useRef(0);
  const handleTime = setInterval(() => {
    const time = timerRef.current++;
    console.log(time);
    setCount(time);
  }, 1000);

  React.useEffect(() => {});
  return (
    <div className="text-center relative top-[400px] text-6xl">
      <p>{count}s</p>
      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> */}
    </div>
  );
};

export default RefFunction;
