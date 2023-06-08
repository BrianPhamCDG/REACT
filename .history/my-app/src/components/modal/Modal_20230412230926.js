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
        <h2 className="modal-heading text-center font-medium text-4xl mb-12">
          Welcome Back!
        </h2>
        <div className="modal-list flex flex-col gap-6">
          <div className="modal-item flex flex-col gap-4 text-sm">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="w-full p-4 bg-[#e2e9ee] rounded-lg text-sm leading-6"
              placeholder="Enter your email"
            />
          </div>
          <div className="modal-item flex flex-col gap-4 text-sm">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full p-4 bg-[#e2e9ee] rounded-lg text-sm leading-6"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4">
            Sign in
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
