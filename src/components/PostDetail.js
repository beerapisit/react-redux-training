import React, { Component } from "react";

class PostDetail extends Component {
  render() {
    const { post, onDelete } = this.props;
    return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action">
            <button
              className="btn red"
              onClick={() => {
                if (onDelete && typeof onDelete === "function") {
                  onDelete(post.id);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
