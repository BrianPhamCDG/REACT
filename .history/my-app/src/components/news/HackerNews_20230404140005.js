import axios from "axios";
import React, { useEffect, useState } from "react";

console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);

  const handleFetchData = async () => {
    try {
      const respond = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default HackerNews;
