import React from "react";

const Tooltip = ({ children, text }) => {
  return (
    <div className="flex justify-center items-center ">
      <h4>{text}</h4>
      <p>{children}</p>
    </div>
  );
};

export default Tooltip;
