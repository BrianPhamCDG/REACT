import React, { useState } from "react";

React.useEffect(() => {}, []);

const HackerNews = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      {data.length > 0 &&
        data.map((item, index) => <h3 key={index}>{item}</h3>)}
    </div>
  );
};

export default HackerNews;
