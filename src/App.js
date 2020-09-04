import React, { Component } from "react";
import "./css/App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllArticles from "./components/AllArticles";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";
import ArticleComments from "./components/ArticleComments";
import Welcome from "./components/Welcome";
import * as api from "./utils/api";
import { navigate } from "@reach/router";

class App extends Component {
  state = {
    activeUser: null,
  };

  handleLogin = async (username, password) => {
    const user = await api.getUsers(username).catch((e) => {
      console.log(e);
    });
    this.setState({ activeUser: user });
    navigate("/");
  };

  handleLogout = () => {
    this.setState({
      activeUser: null,
    });
  };
  render() {
    return (
      <div className="app">
        <Header />
        <NavBar activeUser={this.state.activeUser} logout={this.handleLogout} />
        <Router>
          <Welcome path="/" />
          <AllArticles path="/articles" />
          <AllArticles path="/articles/topic/:topic_slug" />
          <ArticleList path="/articles/:articleId" />
          <ArticleComments
            path="/articles/:articleId/comments"
            activeUser={this.state.activeUser}
          />
          <Login path="/login" login={this.handleLogin} />
        </Router>
      </div>
    );
  }
}

export default App;
