import React from "react";
import { useGallery } from "./gallery-context";

const PhotoList = () => {
  const { photos } = useGallery();
  console.log(photos);
  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-4 gap-5"></div>
    </div>
  );
};

export default PhotoList;
