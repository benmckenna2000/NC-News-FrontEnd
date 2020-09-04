import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/ArticleComments.css";
import AddComment from "./AddComment";

class ArticleComments extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    api.getComments(window.location.pathname.split("/")[2]).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    const { comments } = this.state;

    return (
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => {
            return (
              <li className="articleComments__comments">
                <h5>{comment.body}</h5>
                <h5>
                  Posted by {comment.author}, at {comment.created_at}
                </h5>
                <h5>Votes: {comment.votes}</h5>
              </li>
            );
          })}
        </ul>
        <ul>
          <li className="articleComments__comments">
            <AddComment
              path="/articles/:article_id/comments"
              activeUser={this.props.activeUser}
              comments={this.state.comments}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ArticleComments;
