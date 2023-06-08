import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    setFullname(e.target.value);
  };
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="p-5">
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      <textarea
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
    </div>
  );
};

export default Input;
