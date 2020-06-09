import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();

    /* req.body POST */
    const body = {
      email: this.state.email,
      message: this.state.message,
    };

    /* Configurer la requête */

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    /* FETCH */
    fetch("http://localhost:8080/contact/", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.succes) {
          const newForm = {
            mail: this.state.mail,
            message: this.state.message,
          };
        }
      });
  };
  render() {
    return (
      <Form>
        <div className="containerContact">
          <form className="formcontainer">
            <h2>Contact us !</h2>
            <label for="mail">Mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleInput}
            ></input>
            <label for="msg">Message:</label>
            <br />
            <input
              type="textarea"
              id="textarea"
              name="message"
              required
              value={this.state.message}
              placeholder="Message"
              onChange={this.handleInput}
            ></input>
            <button>Contact us</button>
          </form>
        </div>
      </Form>
    );
  }
}

export default Contact;
