import React, { useEffect, useState } from "react";
import axios from "axios";

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
  const [randomPhotos, setRandomPhotos] = useState([]);

  useEffect(() => {
    getRandomPhotos().then((images) => {
      setRandomPhotos(images);
    });
  }, []);

  // console.log(Array.isArray(randomPhotos))

  return <div>{randomPhotos}</div>;
};

export default Photo;
