import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [articles, setArticles] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      const result = await api.get(
        `top-headlines?country=us&pageSize=3&q=${query}&page=${currentPage}`
      );
      const { articles, totalResults } = result.data;
      setArticles(articles);
      setTotalResults(totalResults);
    })();
  }, [query, currentPage]);

  return (
    <DataContext.Provider
      value={{
        articles,
        totalResults,
        query,
        currentPage,
        setCurrentPage,
        setQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  const {
    articles,
    totalResults,
    query,
    currentPage,
    setCurrentPage,
    setQuery,
  } = context;
  return {
    articles,
    totalResults,
    query,
    currentPage,
    setCurrentPage,
    setQuery,
  };
}
