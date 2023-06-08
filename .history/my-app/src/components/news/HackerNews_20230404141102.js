import axios from "axios";
import React, { useEffect, useState } from "react";

console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const respond = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      setHits(respond.data.hits);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(hits);
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
        {hits.length > 0 &&
          hits.map((item, index) => <h3 key={index}>{item.hits.url}</h3>)}
      </div>
    </div>
  );
};

export default HackerNews;
