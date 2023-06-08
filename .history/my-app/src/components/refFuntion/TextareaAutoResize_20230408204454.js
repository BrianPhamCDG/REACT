import React from "react";

const TextareaAutoResize = () => {
  return (
    <div>
      <textarea
        className="w-full max-w-[400px] p-5 rounded border-gray-400 border resize-none focus:border-red-700"
        placeholder="Please enter your content..."
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
