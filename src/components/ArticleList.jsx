import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/ArticleList.css";
import { Link } from "@reach/router";

class ArticleList extends Component {
  state = {
    article: [],
  };

  componentDidMount() {
    api.getArticle(window.location.pathname.split("/")[2]).then((article) => {
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;

    return (
      <main className="articleList">
        <div className="articleList__article">
          <div className="articleList__header">
            <h2 className="articleList__title">{article.title}</h2>
          </div>

          <p>{article.body}</p>
          <div className="articleList__info">
            <h6>
              Created by: {article.author} at: {article.created_at}
            </h6>
            <h6>Votes: {article.votes}</h6>
          </div>
          <div className="articleList__comment">
            <Link
              to={`/articles/${
                window.location.pathname.split("/")[2]
              }/comments`}
            >
              <button className="articleList__button">
                View all comments ({article.comment_count})
              </button>
            </Link>
          </div>
          <div className="articleList__backButton">
            <Link to="/articles">
              <button className="articleList__button">Back</button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default ArticleList;
