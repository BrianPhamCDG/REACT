import React from "react";
// import "./Button.scss";
import style from "./Button.module.scss";

const Button = (props) => {
  return (
    <div>
      <button className={`button ${props.className || ""}`}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
