import React, { useEffect, useState } from "react";
import axios from "axios";

const [randomPhotos, setRandomPhotos] = useState([]);

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photo = () => {
  useEffect(() => {
    getRandomPhotos().then((images) => {
      setRandomPhotos(images);
    });
  }, []);
  return <div></div>;
};

export default Photo;
