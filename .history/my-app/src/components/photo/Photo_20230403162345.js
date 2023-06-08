import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const getPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  console.log(photos);
  console.log(setPhotos);
  const [pageNumber, setPageNumber] = useState([0]);

  useEffect(() => {
    handleLoadMorePhotos();
  }, []);

  const handleLoadMorePhotos = async () => {
    const images = await getPhotos(pageNumber);
    const newPhotos = [...photos, ...images];
    setPageNumber(Number(pageNumber) + 1);
    setPhotos(newPhotos);
    };
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.map((item, index) => (
          <div
            key={`${index}>${item.download_url}`}
            className="p-3 bg-blue-400 shadow-md rounded-lg h-[200px]"
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
