import React, { createContext, useContext, useState } from "react";

// const { createContext } = require("react");
const fakeData = [{}];

const GalleryContext = createContext();

function GalleryProvider(props) {
  const [photos, setPhotos] = useState([]);
  return <GalleryContext.Provider {...props}></GalleryContext.Provider>;
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within an GallaryProvider");
  return context;
}

export { useGallery, GalleryProvider };
