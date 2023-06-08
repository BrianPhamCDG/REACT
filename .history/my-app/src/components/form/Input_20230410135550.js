import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [select, setSelect] = useState("");
  const handleInputChange = (e) => {
    setFullname(e.target.value);
    console.log(fullname);
  };
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelect(e.target.value);
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
      {select}
      <select name="country" id="" className="handleSelectChange">
        <option value="vietnam">VN</option>
        <option value="usa">US</option>
        <option value="japan">JAP</option>
      </select>
    </div>
  );
};

export default Input;
