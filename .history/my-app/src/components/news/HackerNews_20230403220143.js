import React, { useState } from "react";

React.useEffect(() => {}, []);

const HackerNews = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      {HackerNews.length > 0 &&
        HackerNews.map((item, index) => <h3 key={index}>{item}</h3>)}
    </div>
  );
};

export default HackerNews;
