import React from "react";
import "../styles/List.css";
import "../styles/Home.css";
import { articles } from "../api";

function List() {
  return (
    <>
      <div className="wrapper">
        <div className="wrappppp">
          {articles.map((article) => (
            <div className="profile-card">
              <div className="profile-header" key={article.id}>
                <img src={article.url} alt="" />
              </div>
              <div className="profile-body">
                <div className="name">{article.author}</div>
                <div className="intro">
                  <p> {article.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default List;
