import React from 'react';
import Feature from './Feature';
import data.js from "/Brian/Classes/Coding/REACT/my-app/src/data";

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