import React from "react";
import { useGallery } from "./gallery-context";

const PhotoList = () => {
  const { photos } = useGallery();
  console.log(photos);
  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-4 gap-5">
        {photos.length > 0 &&
          photos.maps((item) => <PhotoItem key={item.id}></PhotoItem>)}
      </div>
    </div>
  );
};

export default PhotoList;
