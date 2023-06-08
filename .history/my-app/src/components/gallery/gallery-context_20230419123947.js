import React, { createContext, useContext } from "react";

// const { createContext } = require("react");

const GalleryContext = createContext();

function GalleryProvider(props) {
  return <GalleryContext value>{props}</GalleryContext>;
}
