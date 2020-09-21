import React from "react";
import moment from "moment";

import "./styles.css";

function Article(props) {
  return (
    <article className="post">
      <img src={props.image} alt="" />
      <div className="post-info">
        <h2>{props.title}</h2>
        <span className="post-info-source">{props.source}</span>
      </div>
      <small className="post-info-date">
        {moment(props.publishedAt).fromNow()}
      </small>
    </article>
  );
}

export default Article;
