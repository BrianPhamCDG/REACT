import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullname] = useState("");
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
