import React from "react";
import { youtubeData } from "../../data";
import Feature from "./Feature";

const featureList = () => {
  return (
    <div className="youtube">
      {youtubeData.map((item, index) => (
        <Feature
          key={item.id}
          image={item.image}
          author={item.author || item.image}
          title={item.title}
          desc={item.desc}
        ></Feature>
      ))}
    </div>
  );
};

export default featureList;
