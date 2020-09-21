import React from "react";
import moment from "moment";

import "./styles.css";

function Article(props) {
  return (
    <article className="post">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt="" />
      </a>
      <div className="post-info">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <h2>{props.title}</h2>
        </a>
        <span className="post-info-source">{props.source}</span>
      </div>
      <small className="post-info-date">
        {moment(props.publishedAt).fromNow()}
      </small>
    </article>
  );
}

export default Article;
