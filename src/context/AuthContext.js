import React, { Component, useState } from "react";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

// export default class AuthProvider extends Component {
//   state = {
//     username: "",
//   };

//   login = () => {
//     this.setState({
//       username: "Beer",
//     });
//   };

//   logout = () => {
//     this.setState({
//       username: "",
//     });
//   };

//   render() {
// const value = {
//     username: this.state.username,
//     login: this.login,
//     logout: this.logout
// }
//     return (
//       <AuthContext.Provider value={value}>
//         {this.props.children}
//       </AuthContext.Provider>
//     );
//   }
// }

export const withAuthContext = (Component) => {
  const ComponentWrapped = () => {
    return (
      <AuthContext.Consumer>
        {(props) => <Component {...props} />}
      </AuthContext.Consumer>
    );
  };
  return ComponentWrapped;
};

const AuthProvider = (props) => {
  const [username, setUsername] = useState("");
  const login = () => {
    setUsername("beer");
  };
  const logout = () => {
    setUsername("");
  };
  const value = {
    username,
    login,
    logout
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
