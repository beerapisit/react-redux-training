import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { createPost } from "../store/actions/postAction";
import { useDispatch } from "react-redux";

// class AddPost extends Component {
//   state = {
//     title: "",
//     content: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const newPost = {
//       id: v4(),
//       title: this.state.title,
//       content: this.state.content,
//     };
//     this.props.createPost(newPost);
//     this.setState({
//       title: "",
//       content: "",
//     });
//   };

//   render() {
//     const { title, content } = this.state;
//     return (
//       <div className="container">
//         <h5>Form New Post</h5>
//         <form onSubmit={this.handleSubmit}>
//           <div className="input-field">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={title}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="input-field">
//             <label htmlFor="content">Content</label>
//             <textarea
//               type="text"
//               name="content"
//               value={content}
//               onChange={this.handleChange}
//               className="materialize-textarea"
//             ></textarea>
//           </div>
//           <div className="input-field">
//             <button className="btn blue">Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createPost: (post) => {
//       dispatch(createPost(post));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(AddPost);

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: v4(),
      title: title,
      content: content,
    };
    dispatch(createPost(newPost));
    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <h5>Form New Post</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className="materialize-textarea"
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
