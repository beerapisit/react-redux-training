import React, { Component } from "react";
import PostDetail from "./PostDetail";
import { connect, useStore } from "react-redux";
import { deletePost } from "../store/actions/postAction";
import { useSelector, useDispatch } from "react-redux";

// class PostList extends Component {
//   render() {
//     const { posts } = this.props;
//     return (
//       <div className="container">
//         <div className="row">
//           {posts &&
//             posts.map((post) => {
//               return (
//                 <PostDetail
//                   key={post.id}
//                   post={post}
//                   onDelete={this.props.deletePost}
//                 />
//               );
//             })}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => {
//       dispatch(deletePost(id));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PostList);

const PostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);
  console.log("posts:", posts)
  return (
    <div className="container">
      <div className="row">
        {posts &&
          posts.map((post) => {
            return (
              <PostDetail
                key={post.id}
                post={post}
                onDelete={(id) => {
                  dispatch(deletePost(id));
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PostList;
