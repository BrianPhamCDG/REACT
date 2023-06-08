import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const getPhotos = () => {
  axios.get("https://picsum.photos/v2/list").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const Photo = () => {
  return (
    <div>
      <div>
        {getPhotos.map((item, index) => (
          <img key={index} src={item} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Photo;
