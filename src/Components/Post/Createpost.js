/* CREATE POST =  POSTS FORM */

import React, { Component } from "react";
import "./createpost.css";

/* ----- */
class Createpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: " ",
      posts: [],
    };
  }

  handle_input = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  /*---------------------------------------------------------------CREATE POSTS-----------------------------------------------------------------*/

  create_post = (event) => {
    /* Request */
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };
    event.preventDefault();
    const body = {
      message: this.state.postData,
    };

    /* Fetch */
    fetch("http://localhost:8080/posts/", options)
      .then((response) => response.json())
      .then(
        (data) => {
          if (data.succes) {
            const newPost = {
              data: this.state.postData,
            };

            let posts = this.state.posts;

            posts.push(newPost);

            this.setState({ posts: posts, postData: "" });
          }
        },
        (error) => {}
      );
  };

  /*let posts = [];

    this.state.posts.forEach((element, index) => {
      posts.push(<Post key={index} data={element.data} />);
    });

    return posts;*/

  componentDidMount() {
    this.setState();
  }
  render() {
    return (
      <div className="containerform">
        <div className="postData">
          <label>What's on your mind ?</label>
          <form method="POST">
            <textarea
              className="postData"
              value={this.state.postData}
              onChange={this.handle_input}
              name="postData"
              required
            ></textarea>

            <button onClick={this.create_post}>Say it!</button>
          </form>
        </div>
        <div className="containerpost">{this.display_posts}</div>
      </div>
    );
  }
}
export default Createpost;
