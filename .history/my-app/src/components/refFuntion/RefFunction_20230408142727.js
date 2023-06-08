import React from "react";

const RefFunction = () => {
  console.log(`Mounted`);
  const countRef = React.useRef(0);
  const handleClick = () => {
    countRef.current++;
    const count = countRef.current + 1;

    console.log(count);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default RefFunction;
