import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div className="modal fixed inset-0 z-50 p-5 items-center ">
      <div className="overlay absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="modal-content z-10 bg-white"></div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;