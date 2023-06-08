import React from "react";

const Input = () => {
  return (
    <div className="p-5">
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your name"
      />
    </div>
  );
};

export default Input;
