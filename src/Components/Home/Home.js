/* Imports */
import React, { Component } from "react";
import "./home.css";
import Logo from "../../images/logo3.1.png";
/*--------*/

class Home extends Component {
  render() {
    return (
      <div>
        <h1>TagHub</h1>
        <p>Hello TagHuber !</p>

        <div class="container">
          <img src={Logo} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">Share your coding experience !</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
