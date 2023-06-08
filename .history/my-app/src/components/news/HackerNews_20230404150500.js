import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState([`react`]);
  const handleFetchData = useRef({});

  useEffect(() => {
    handleFetchData.current();
  }, [query]);

  handleFetchData.current = async () => {
    try {
      const respond = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(respond.data?.hits || []);
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
          className="border border-orange-500 text-black mb-6 p-2 rounded-3xl z-10"
          value={query}
          onchange={(e) => setQuery(e.target.value)}
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
