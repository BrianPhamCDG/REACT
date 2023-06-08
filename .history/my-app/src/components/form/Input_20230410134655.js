import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullname] = useState("");
  const handleInputChange = (e) => {
    setFullname(e.target.value);
    console.log(fullname);
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
    </div>
  );
};

export default Input;
