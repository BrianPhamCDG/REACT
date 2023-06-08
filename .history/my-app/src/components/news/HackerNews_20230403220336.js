import React, { useState } from "react";

const getAPI = axios
  .get("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

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
