import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

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
  const [pageNumber, setPageNumber] = useState([0]);

  useEffect(() => {
    console.log(pageNumber);
    handleLoadMorePhotos();
  }, []);

  const handleLoadMorePhotos = () => {
    getPhotos(pageNumber).then((res) => {
      setPageNumber(Number(pageNumber) + 1);
      setPhotos(res);
    });
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-slate-400 shadow-md rounded-lg h-[200px]"
          >
            <img
              id={item.id}
              src={item.download_url}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
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
