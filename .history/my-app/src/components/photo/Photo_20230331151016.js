import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const getPhotos = () => {
  axios.get("https://picsum.photos/v2/list").then((response) => {
    console.log(response.data);
  });
};

const Photo = () => {
  return (
    <div>
      <div>{getPhotos.map(() => ( ))}</div>
    </div>
  );
};

export default Photo;
