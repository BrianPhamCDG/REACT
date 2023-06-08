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
          photos.maps((item) => (
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

const PhotoItem = ({ info: { url } }) => {
  return (
    <div className="">
      <img src={url} alt="" />
    </div>
  );
};

PhotoItem.propTypes = {
  url: PropTypes.string,
};

export default PhotoList;
