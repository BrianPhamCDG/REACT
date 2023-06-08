import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div className="modal fixed inset-0">
      <div className="overlay w-full bg-black "></div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
