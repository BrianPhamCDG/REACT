import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullname] = useState("");
  const handleInputChange = (e) => {
    setFullname(e.target.value);
    console.log(fullname);
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
      <textarea
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your message"
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
};

export default Input;
