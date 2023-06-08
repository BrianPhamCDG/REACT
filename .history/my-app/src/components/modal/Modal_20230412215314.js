import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div className="modal">Modal</div>,
    document.querySelector("body")
  );
};

export default Modal;
