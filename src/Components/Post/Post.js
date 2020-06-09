import React, { Component } from "react";
import "./post.css";
class Post extends Component {
  render() {
    return (
      <div className="containerpost">
        <p name="post_data">{this.props.data}</p>
      </div>
    );
  }
}

export default Post;
