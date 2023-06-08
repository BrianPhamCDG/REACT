import axios from "axios";
import React, { useEffect, useState } from "react";

console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);

  const handleFetchData = async () => {
    try {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );

      setHits(response.data?.hits || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  console.log(hits);

  return (
    <div className="relative w-full h-full">
      {hits.length > 0 &&
        hits.map((item, index) => (.
          <h3
            className="w-full h-full absolute top-1/2 bottom-1/2"
            key={item.title}
          >
            {item.author}
          </h3>
        ))}
    </div>
  );
};

export default HackerNews;
