import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const getPhotos = () => {
  axios.get("https://picsum.photos/v2/list").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const Photo = () => {
  return (
    <div>
      <div>
        {getPhotos.map(() => (
          <button>Load</button>
        ))}
      </div>
    </div>
  );
};

export default Photo;
