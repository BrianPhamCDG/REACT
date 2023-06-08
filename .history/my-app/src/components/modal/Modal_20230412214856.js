import React, { ReactDOM } from "react";

const Modal = ({ open = false, handleClose = () => {} }) => {
  return ReactDOM.createPortal(
    <div className="modal"></div>,
    document.querySelector("body")
  );
};

export default Modal;
