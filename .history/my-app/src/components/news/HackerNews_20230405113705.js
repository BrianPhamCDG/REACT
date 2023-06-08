import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";

console.log();

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState([`react`]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(``);
  const handleFetchData = useRef({});
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  // onChange={(e) => setQuery(e.target.value)}

  useEffect(() => {
    handleFetchData.current();
  }, [query]);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const respond = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(respond.data?.hits || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMessage(`The error happend ${err}`);
    }
  };
  console.log(hits);
  return (
    <div className="relative w-screen h-screen top-0 left-0">
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
        <input
          type="text"
          className="border-2 border-orange-500 text-black mb-6 p-2 px-4 rounded-3xl"
          defaultValue={query}
          onChange={handleUpdateQuery}
        />
        {loading && (
          <div className="w-[32px] h-[32px] animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
        )}
        {!loading && errorMessage && (
          <p className="text-red-400 my-5">{errorMessage}</p>
        )}
        {!loading &&
          hits.length > 0 &&
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
