import axios from "axios";
import React, { useState } from "react";

const handleFetchData = async () => {
  try {
    const data = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );

    return console.log(data.data);
  } catch (err) {
    console.log(err);
  }
};
handleFetchData();
console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  React.useEffect(() => {}, []);

  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={index}>{item}</h3>)}
    </div>
  );
};

export default HackerNews;
