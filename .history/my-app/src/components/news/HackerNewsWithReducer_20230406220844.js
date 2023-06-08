import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=``",
};

const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_DATA": {
      return { ...state, hits: action, payload };
    }
  }
};

const HackerNewsWithReducer = () => {
  const [state, dispatch] = React.useReducer(hackerNewsReducer, initialState);

  const handleFetchData = useRef({});

  // const [hits, setHits] = useState([]);
  // const [query, setQuery] = useState([`react`]);
  // const [loading, setLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState(``);
  // const [url, setUrl] = useState(
  //   `https://hn.algolia.com/api/v1/search?query=${query}`
  // );

  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  handleFetchData.current = async () => {
    dispatch({ type: "SET_LOADING", payload: false });
    try {
      const respond = await axios.get(url);
      setHits(respond.data?.hits || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMessage(`The error happend ${err}`);
    }
  };
  console.log(hits);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 w-2/4 rounded-lg shadow-md p-6">
      <div className="">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-3 rounded-md flex-shrink-0 my-6 w-full"
        >
          Fetching
        </button>
        {loading && (
          <div className="w-[32px] h-[32px] animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
        )}
        {!loading && errorMessage && (
          <p className="text-red-400 my-5">{errorMessage}</p>
        )}
        <div className="flex flex-wrap gap-5">
          {!loading &&
            hits.length > 0 &&
            hits.map((item, index) => {
              console.log(item.title);
              if (!item.title || item.title.length <= 0)
                return <h3 key={`${item.created_at}${index}`}>{item.title}</h3>;
              return (
                <h3
                  className="p-3 bg-gray-100 rounded-md"
                  key={`${item.created_at}${index}`}
                >
                  {item.title}
                </h3>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
