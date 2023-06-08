import React, { useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("Demo");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const textRef = useRef();

  const handleOnchange = (e) => {
    setTextareaHeight("auto");
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        className="w-full max-w-[400px] p-5 m-5 rounded-lg border border-gray-400 resize-none focus:border-blue-400 overflow-hidden transition-all"
        placeholder="Please enter your content..."
        value={text}
        onChange={handleOnchange()}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
