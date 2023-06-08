import React from "react";

const Tooltip = ({ children, text }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <p className="p-5 bg-black text-white rounded-xl">{children}</p>
      <h4>{text}</h4>
    </div>
  );
};

export default Tooltip;
