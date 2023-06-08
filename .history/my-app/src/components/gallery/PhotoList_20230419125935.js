import React from "react";
import { useGallery } from "./gallery-context";

const PhotoList = () => {
  const { photos } = useGallery();
  console.log(photos);
  return <div>PhotoList</div>;
};

export default PhotoList;
