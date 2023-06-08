import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div className="modal fixed inset-0 z-50">
      <div className="overlay absolute  bg-black "></div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
