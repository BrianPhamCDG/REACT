import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const asyncFunc = async () => {};
const test = asyncFunc();
console.log(test);

const getPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState([1]);

  useEffect(() => {
    getPhotos().then((picture) => setPhotos(picture));
  }, []);

  const handleLoadMorePhotos = () => {
    getPhotos(pageNumber).then((res) => {
      setPageNumber(pageNumber + 1);
      console.log(pageNumber);
      setPhotos(res);
    });
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.map((item) => (
          <img id={item.id} src={item.download_url} alt="" />
        ))}
      </div>

      <div className="text-center pt-6">
        <button
          onClick={handleLoadMorePhotos}
          className="rounded-md px-8 py-4 bg-blue-600 text-white font-semibold inline-block"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photo;
