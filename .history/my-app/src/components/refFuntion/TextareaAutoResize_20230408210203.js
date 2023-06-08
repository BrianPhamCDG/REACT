import React, { useState } from "react";

const TextareaAutoResize = () => {
  const [textarea, setTextarea] = useState("Demo");
  const [textareaHeight, setTextareaHeight] = useState("");

  const handleOnchange = () => {};
  return (
    <div>
      <textarea
        className="w-full max-w-[400px] p-5 m-5 rounded-lg border border-gray-400 resize-none focus:border-blue-400 overflow-hidden transition-all"
        placeholder="Please enter your content..."
        value={textarea}
        onChange={handleOnchange()}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
