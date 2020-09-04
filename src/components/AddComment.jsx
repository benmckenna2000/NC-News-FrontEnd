import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    commentBody: "",
  };

  handleCommentText = (event) => {
    this.setState({
      commentBody: event.target.value,
    });
  };

  addPostedComment = (comment) => {
    this.setState((state) => {
      return { comments: [comment, ...this.props.comments] };
    });
  };

  handleSubmitComment = (event) => {
    event.preventDefault();
    let data = {
      body: this.state.commentBody,
      username: this.props.activeUser.username,
    };
    return api
      .postComment(data, window.location.pathname.split("/")[2])
      .then((comment) => {
        this.addPostedComment(comment);
      });
  };

  render() {
    return (
      <div className="addComment">
        <h3>Post a comment</h3>
        <form
          className="addComment__comment"
          id="commentForm"
          onSubmit={this.handleSubmitComment}
        >
          <h5>Comment:</h5>
          <div className="addComment__commentInput">
            <textarea form="commentForm" onChange={this.handleCommentText} />
          </div>
          <button type="submit" className="addComment__button">
            Add comment
          </button>
        </form>
      </div>
    );
  }
}

export default AddComment;
