import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState("");
  const nodeRef = useRef(null);
  const handleMouseEnter = (e) => {
    setIsHovering(true);
    setCoords(e.target.getBoundingClientRect());
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  console.log(coords);
  return (
    <div className="flex flex-col justify-center items-center ">
      {isHovering && (
        <TooltipContent coords={coords}>{children}</TooltipContent>
      )}
      <h4
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={nodeRef}
        className="relative"
      >
        {text}
      </h4>
    </div>
  );
};

function TooltipContent({ children, coords }) {
  return ReactDOM.createPortal(
    <p
      className="p-5 bg-black text-white rounded-xl mb-5 inline-block absolute -translate-y-full max-w-[400px] -translate-x-2/4"
      style={{
        top: coords.top + window.scrollY,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default Tooltip;
