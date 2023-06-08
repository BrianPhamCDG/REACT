import React, { useState } from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(isHovering);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <TooltipContent>{children}</TooltipContent>
      <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text}
      </h4>
    </div>
  );
};

function TooltipContent({ children }) {
  return ReactDOM.createPortal(
    <p className="p-5 bg-black text-white rounded-xl mb-5">{children}</p>,
    document.querySelector("body")
  );
}

export default Tooltip;
