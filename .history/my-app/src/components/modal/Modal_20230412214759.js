import React, { ReactDOM } from "react";

const Modal = ({ open = false, handleClose = () => {} }) => {
  return ReactDOM.createPortal(<div></div>);
};

export default Modal;
