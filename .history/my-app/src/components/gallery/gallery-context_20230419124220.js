import React, { createContext, useContext } from "react";

// const { createContext } = require("react");

const GalleryContext = createContext();

function GalleryProvider(props) {
  return <GalleryContext.Provider {...props}></GalleryContext.Provider>;
}

function useGallery(props) {
  const context = useContext(GalleryContext)
  if (typeof context === 'undefined')
  throw
}