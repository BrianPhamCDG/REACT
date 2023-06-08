import React from "react";

const Feature = () => {
  return (
    <div className="feature">
      <img src={props.image} alt="" className="feature-image" />
      <div className="flex">
        <img src={props.author} alt="" className="feature-author" />
        <div className="flex-desc">
          <h3 className="feature-title">{props.title}</h3>
          <span className="feature-desc">{props.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default Feature;
