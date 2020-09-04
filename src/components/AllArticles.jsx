import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/AllArticles.css";
import { Link } from "@reach/router";

class AllArticles extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    console.log("hit");
    api.getArticles().then((articles) => {
      this.setState({ articles });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const topic = prevState.articles.map((article) => {
      return article.topic;
    });
    if (topic === prevProps.topic_slug) {
      api.getArticles(topic).then((articles) => {
        this.setState({ articles });
      });
    }
  }
  render() {
    const { articles } = this.state;
    return (
      <main className="allArticles">
        <section className="allArticles__body">
          <h2>Articles</h2>
        </section>
        <ul>
          {articles.map((article) => {
            return (
              <li className="allArticles__list">
                <Link
                  key={article.article_id}
                  to={`/articles/${article.article_id}`}
                >
                  <h3 className="allArticles__title">{article.title}</h3>
                </Link>
                <h5 className="allArticles__info">
                  Author: {article.author}, Topic: {article.topic}, Votes:{" "}
                  {article.votes}
                </h5>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default AllArticles;
