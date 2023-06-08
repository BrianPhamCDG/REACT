import React from "react";

const TextareaAutoResize = () => {
  return (
    <div>
      <textarea
        className="w-full max-w-[400px] p-5 m-5 rounded-lg border border-gray-400 resize-none focus:border-blue-400 overflow-hidden"
        placeholder="Please enter your content..."
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
