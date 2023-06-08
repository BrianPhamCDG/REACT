import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const getPhotos = () => {
  return axios
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
  useEffect(() => {}, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {/* {getPhotos.map((item) => {})} */}
      </div>

      <div className="text-center pt-6">
        <button className="rounded-md px-8 py-4 bg-blue-600 text-white font-semibold inline-block">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photo;
