import React from "react";
import { useGallery } from "./gallery-context";

const PhotoList = () => {
  const { photos } = useGallery();
  return <div>PhotoList</div>;
};

export default PhotoList;
