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
      return { ...state, hits: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
  }
};

const HackerNewsWithReducer = () => {
  const [state, dispatch] = React.useReducer(hackerNewsReducer, initialState);

  const handleFetchData = useRef({});

  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  handleFetchData.current = async () => {
    dispatch({ type: "SET_LOADING", payload: false });
    try {
      const respond = await axios.get(state.url);
      dispatch({ type: "SET_DATA", payload: respond.data?.hits || [] });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: `The error happend ${err}` });
    }
  };

  return (
    <div className="bg-white mx-auto mt-5 mb-5 w-2/4 rounded-lg shadow-md p-6">
      <div className="">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${state.query}`)
          }
          className="bg-blue-500 text-white font-semibold p-3 rounded-md flex-shrink-0 my-6 w-full"
        >
          Fetching
        </button>
        {state.loading && (
          <div className="w-[32px] h-[32px] animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
        )}
        {!state.loading && state.errorMessage && (
          <p className="text-red-400 my-5">{state.errorMessage}</p>
        )}
        <div className="flex flex-wrap gap-5">
          {!state.loading &&
            state.hits.length > 0 &&
            state.hits.map((item, index) => {
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
