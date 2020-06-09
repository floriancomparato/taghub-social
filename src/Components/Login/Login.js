import React, { Component } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      psw: "",
      signMail: "",
      signSurname: "",
      signPassword: "",
      success: false,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitSignup = (e) => {
    e.preventDefault();

    /* req.body POST sign up user*/
    const body = {
      surname: this.state.surname,
      email: this.state.email,
      psw: this.state.psw,
    };

    /* config request */

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    /* FETCH */
    fetch("http://localhost:8080/users/signup/", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="containerlogin">
        <form className="formcontainer">
          <h2>Log in !</h2>
          <label for="mail">Mail:</label>
          <input
            type="email"
            id="mail"
            name="email"
            required
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleInput}
          ></input>
          <label for="mdp">Password:</label>
          <br />
          <input
            type="password"
            id="psw"
            name="psw"
            required
            value={this.state.psw}
            placeholder="Password"
            onChange={this.handleInput}
          ></input>
          <Link to="/">
            <button>Login</button>
          </Link>
        </form>

        <div className="containersignup">
          <form className="formcontainer">
            <h2>Sign up !</h2>
            <label for="surname">Surname:</label>
            <br />
            <input
              type="text"
              id="surname"
              name="surname"
              required
              value={this.state.surname}
              placeholder="surname"
              onChange={this.handleInput}
            ></input>
            <br />
            <label for="mail">Mail:</label>
            <input
              type="email"
              id="mail"
              name="email"
              required
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleInput}
            ></input>
            <br />
            <label for="mdp">Password:</label>
            <br />
            <input
              type="password"
              id="psw"
              name="psw"
              required
              value={this.state.psw}
              placeholder="Password"
              onChange={this.handleInput}
            ></input>
            <Link to="/">
              <button>Sign up</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
