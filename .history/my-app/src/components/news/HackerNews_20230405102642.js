import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState([`react`]);
  const [loading, setLoading] = useState(true);
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
          className="border-2 border-orange-500 text-black mb-6 p-2 px-4 rounded-3xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && (
          <div className="border-[16px] rounded-[50%] w-[120px]"></div>
        )}
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
