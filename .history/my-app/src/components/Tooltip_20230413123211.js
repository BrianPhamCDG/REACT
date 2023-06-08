import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState("");
  const nodeRef = useRef(null);
  const handleMouseEnter = () => {
    setIsHovering(true);
    setCoords(nodeRef.current.getBoundingClientRect());
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  console.log(nodeRef.current);
  return (
    <div className="flex flex-col justify-center items-center ">
      {isHovering && <TooltipContent>{children}</TooltipContent>}
      <h4
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={nodeRef}
      >
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
