import React, { useState } from "react";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [select, setSelect] = useState("");
  // const handleInputChange = (e) => {
  //   setFullname(e.target.value);
  //   console.log(fullname);
  // };
  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setSelect(e.target.value);
  // };
  const [data, setData] = useState({
    fullname: "",
    email: "",
  });
  const handleInputChange = (e) => {
    setData({});
  };
  return (
    <div className="p-5">
      <div className="flex gap-x-6">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
      </div>
      {/* <textarea
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
      <select name="country" id="" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">JAP</option>
      </select> */}
    </div>
  );
};

export default Form;
