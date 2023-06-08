import React from "react";
import axios from "axios";

const getPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    });
};

const Photo = () => {
  return <div>Photos</div>;
};

export default Photo;
