import React from "react";
import { useGallery } from "./gallery-context";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos } = useGallery();
  console.log(photos);
  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-4 gap-5">
        {photos.length > 0 &&
          photos.map((item) => (
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

const PhotoItem = ({ info }) => {
  console.log(info.url);
  return (
    <div className="relative h-[300px] cursor-pointer group">
      <img src={info.url} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

PhotoItem.propTypes = {
  url: PropTypes.string,
};

export default PhotoList;
