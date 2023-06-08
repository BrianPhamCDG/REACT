import axios from "axios";
import React, { useEffect, useState } from "react";

console.log();

const HackerNews = () => {
  setHits(response.data?.hits || []);
  const handleFetchData = async () => {
    try {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
    } catch (err) {
      console.log(err);
    }
  };
  const [hits, setHits] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);
  console.log(hits);

  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.author} Here</h3>)}
    </div>
  );
};

export default HackerNews;
