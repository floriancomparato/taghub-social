import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../images/logo3.1.png";

/* imports components */

class Navbar extends Component {
  render() {
    return (
      <div className="containernav">
        <ul className="topnav">
          <Link to="/">
            <li>
              <img alt="logo" src={Logo} />
            </li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/profile">
            <li>User</li>
          </Link>
          <Link to="/wall">
            <li>Wall</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
