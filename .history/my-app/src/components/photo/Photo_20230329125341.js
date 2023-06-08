import React, { useEffect } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // console.log(error);
    });
};

const Photo = () => {
  const Photos = {};

  useEffect(() => {
    getRandomPhotos();
  }, []);
  return <div></div>;
};

export default Photo;
