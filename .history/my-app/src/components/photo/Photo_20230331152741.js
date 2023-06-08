import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const getPhotos = () => {
  axios.get("https://picsum.photos/v2/list").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

getPhotos();

const renderPhotos = getPhotos.map((item) => {
  console.log(item);
});

const Photo = () => {
  return (
    <div>
      <div>{renderPhotos}</div>
    </div>
  );
};

export default Photo;
