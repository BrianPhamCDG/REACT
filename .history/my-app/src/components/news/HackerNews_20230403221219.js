import axios from "axios";
import React, { useState } from "react";

const getAPI = async (url) => {
  try {
    await axios.get("https://hn.algolia.com/api/v1/search?query=react");

    return console.log(url);
  } catch (err) {
    console.log(err);
  }
};
getAPI();
console.log();

const HackerNews = () => {
  const [data, setData] = useState([]);
  React.useEffect(() => {}, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((item, index) => <h3 key={index}>{item}</h3>)}
    </div>
  );
};

export default HackerNews;
