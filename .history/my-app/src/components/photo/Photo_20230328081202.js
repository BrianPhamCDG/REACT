import React from "react";
import axios from "axios";

const getPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

const Photo = () => {
  return <div>Photos</div>;
};

export default Photo;
