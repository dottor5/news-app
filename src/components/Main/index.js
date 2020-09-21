import React from "react";

import { useData } from "../../context/Data";
import Article from "../Article";

export default function Main() {
  const { articles } = useData();

  return articles ? (
    articles.map((article, index) => (
      <Article
        key={index}
        image={article.urlToImage}
        title={article.title}
        source={article.source.name}
        publishedAt={article.publishedAt}
      />
    ))
  ) : (
    <h1>Loading...</h1>
  );
}
