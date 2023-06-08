import React from "react";

const RefFunction = () => {
  console.log(Mounted);
  const countRef = React.useRef(0);
  const handleClick = () => {
    const count = countRef.current;
    countRef.current++;
    console.log(count);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default RefFunction;
