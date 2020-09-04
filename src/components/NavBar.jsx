import React, { Component } from "react";
import "../css/NavBar.css";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Button from "./helpers/Button";

class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    api.getTopic().then((topics) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <div className="navbar">
        <div className="navbar__nav">
          <div className="navbar__options">
            {this.props.activeUser ? (
              <button onClick={this.props.logout}>Logout</button>
            ) : (
              <Button linkTo="/login" text="Log In" />
            )}
          </div>
          <div className="navbar__topics">
            <Link to="/articles">
              <button className="navbar__button">view all articles</button>
            </Link>
            {topics.map((topic) => {
              return (
                <Link to={`/articles/topic/${topic.slug}`}>
                  <button className="navbar__button">{topic.slug}</button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
