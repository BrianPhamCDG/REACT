import axios from "axios";
import React, { useEffect, useState } from "react";

console.log();

const HackerNews = () => {
  const handleFetchData = async () => {
    try {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      setHits(response.data || []);
      return response.data?.hits;
    } catch (err) {
      console.log(err);
    }
  };
  const [hits, setHits] = useState([]);

  useEffect(() => {}, []);
  console.log(hits);

  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.author} Here</h3>)}
    </div>
  );
};

export default HackerNews;
