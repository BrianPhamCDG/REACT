import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const getPhotos = () => {
  axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(typeof response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

getPhotos();

// const renderPhotos = getPhotos.map((item) => {
//   console.log(item);
// });

const Photo = () => {
  return (
    <div>
      <div>
        {getPhotos.length > 1 &&
          getPhotos.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-slate-400 shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="object-cover rounded-md w-full h-full"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Photo;
