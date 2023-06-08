import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const asyncFunc = async () => {};
const test = asyncFunc();
console.log(test);

const getPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const Photo = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((picture) => console.log(picture));
  }, []);

  // const renderPhotos = photos.map((item) => (
  //   <img id={item.id} src={item.download_url} alt="" />
  // ));

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5"></div>

      <div className="text-center pt-6">
        <button className="rounded-md px-8 py-4 bg-blue-600 text-white font-semibold inline-block">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photo;
