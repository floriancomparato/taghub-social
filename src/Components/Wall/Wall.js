import React, { Component } from "react";
import "./wall.css";
import Createpost from "../Post/Createpost";

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  /* Configurer la requête */
  fetchData = () => {
    /* Options, paramètres de la requête */
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    };

    fetch("http://localhost:8080/posts", options)
      .then((res) => res.json)
      .then((data) => {
        this.setState({ posts: data.posts });
      });
  };

  render() {
    return (
      <div className="pages">
        <Createpost />
      </div>
    );
  }
}

export default Wall;
