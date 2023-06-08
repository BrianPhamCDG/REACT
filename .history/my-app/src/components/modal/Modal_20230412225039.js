import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div className="modal fixed inset-0 z-50 p-5 flex items-center justify-center">
      <div className="modal-overlay absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="modal-content relative z-10 p-10 bg-white rounded-lg w-full max-w-[482px]">
        <span className="absolute top-0 right-0 translate-x-2/4 -translate-y-2/4 cursor-pointer">
          Close
        </span>
        <h2 className="text-center font-medium">Welcome back!</h2>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
