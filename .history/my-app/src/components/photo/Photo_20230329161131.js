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
      console.log(images);
      setRandomPhotos(images);
    });
  }, []);

  // console.log(Array.isArray(randomPhotos))

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {randomPhotos.map((item, index) => (
        <div key={item.id} className="p-3 bg-slate-400 shadow-md rounded-lg">
          <img src={item.download_url} alt={item.author} />
        </div>
      ))}
    </div>
  );
};

export default Photo;
