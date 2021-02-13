import React, { Component } from "react";
import { AuthConsumer, withAuthContext } from "../context/AuthContext";

// class AboutPage extends Component {
//   render() {
//     return (
//       <AuthConsumer>
//         {(props) => {
//           return (
//             <div className="container">
//               <div style={{ marginTop: "4rem" }}>
//                 username: {props.username}
//               </div>
//               <button
//                 className="btn blue"
//                 onClick={() => {
//                   props.login();
//                 }}
//               >
//                 Login
//               </button>
//               <button
//                 className="btn red"
//                 onClick={() => {
//                   props.logout();
//                 }}
//               >
//                 Logout
//               </button>
//             </div>
//           );
//         }}
//       </AuthConsumer>
//     );
//   }
// }

const AboutPage = (props) => (
  <div className="container">
    <div style={{ marginTop: "4rem" }}>username: {props.username}</div>
    <button
      className="btn blue"
      onClick={() => {
        props.login();
      }}
    >
      Login
    </button>
    <button
      className="btn red"
      onClick={() => {
        props.logout();
      }}
    >
      Logout
    </button>
  </div>
);

export default withAuthContext(AboutPage);
