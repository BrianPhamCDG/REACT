import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState([`react`]);
  const handleFetchData = useRef({});

  useEffect(() => {
    handleFetchData.current();
  }, []);

  handleFetchData.current = async (page) => {
    try {
      const respond = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query || `react`}`
      );
      setHits(respond.data?.hits || []);
      setQuery(page);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(hits);
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
        <input
          type="text"
          className="border border-orange-500 text-black pb-4"
          value={{ query }}
        />
        {hits.length > 0 &&
          hits.map((item, index) => (
            <h3 className="pb-2" key={`${item.created_at}${index}`}>
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
