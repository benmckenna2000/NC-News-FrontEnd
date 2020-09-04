import React, { Component } from "react";
import "../css/Login.css";

import propTypes from "prop-types";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="login">
        <div className="login__container">
          <h1>Sign in</h1>
          <form className="" onSubmit={this.handleFormSubmit}>
            <h5>Username</h5>
            <input
              type="text"
              onChange={this.handleUsername}
              value={this.state.username}
            />
            <h5>Password</h5>
            <input
              type="password"
              onChange={this.handlePassword}
              value={this.state.password}
            />
            <button className="login__button" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleLogin: propTypes.func,
  activeUser: propTypes.object,
};

export default Login;
