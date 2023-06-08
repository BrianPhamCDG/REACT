import axios from "axios";
import React, { useState } from "react";

const getAPI = async () => {
  await axios.get("/user?ID=12345");
};

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
