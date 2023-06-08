import React from "react";
import { ReactDOM } from "react-dom";

const Tooltip = ({ children, text }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {TooltipContent({ children })}
      <h4>{text}</h4>
    </div>
  );
};

const TooltipContent = ({ children }) => {
  return ReactDOM.createPortal(
    <p className="p-5 bg-black text-white rounded-xl mb-5">{children}</p>
  );
};

export default Tooltip;
