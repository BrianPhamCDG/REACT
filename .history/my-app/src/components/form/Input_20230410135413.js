import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    setFullname(e.target.value);
    console.log(fullname);
  };
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="p-5">
      {fullname}

      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      {message}
      <textarea
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
      <select name="country" id="">
        <option value="vietnam">VN</option>
        <option value="usa">US</option>
        <option value="japan">JAP</option>
      </select>
    </div>
  );
};

export default Input;
