import axios from "axios";
import React, { useEffect, useState } from "react";

const handleFetchData = async () => {
  try {
    const data = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );

    return data.data.hits;
  } catch (err) {
    console.log(err);
  }
};
console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);

  useEffect(() => {
    setHits(handleFetchData());
  }, []);
  console.log(hits);
  console.log(setHits);

  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={index}>{item.author} Here</h3>)}
    </div>
  );
};

export default HackerNews;
