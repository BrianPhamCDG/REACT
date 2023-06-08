import React from "react";

const RefFunction = () => {
  const countRef = React.useRef(0);
  const handleClick = () => {
    const count = countRef.current;
    countRef.current++;
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default RefFunction;
