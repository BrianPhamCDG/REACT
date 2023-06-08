import React, { useState } from "react";

const TextareaAutoResize = () => {
  const [textareaHeight, setTextareaHeight] = useState("");
  return (
    <div>
      <textarea
        className="w-full max-w-[400px] p-5 m-5 rounded-lg border border-gray-400 resize-none focus:border-blue-400 overflow-hidden transition-all"
        placeholder="Please enter your content..."
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
