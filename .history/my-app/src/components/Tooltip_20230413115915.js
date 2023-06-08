import React from "react";

const Tooltip = ({ children, text }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {TooltipContent({ children })}
      <h4>{text}</h4>
    </div>
  );
};

const TooltipContent = (children) => {
  <p className="p-5 bg-black text-white rounded-xl mb-5">{children}</p>;
};

export default Tooltip;
