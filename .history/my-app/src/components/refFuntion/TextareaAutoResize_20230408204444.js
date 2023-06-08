import React from "react";

const TextareaAutoResize = () => {
  return (
    <div>
      <textarea
        className="w-full max-w-[400px] p-5 rounded border-gray-400 border  focus:ring-blue-500
 resize-none"
        placeholder="Please enter your content..."
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
