import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ open = false, handleClose = () => {} }) => {
  return ReactDOM.createPortal(
    <div className="modal"></div>,
    document.querySelector("body")
  );
};

export default Modal;
