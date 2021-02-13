import React, { useContext } from "react";
import { AuthContext, withAuthContext } from "../context/AuthContext";

const ContactPage = (props) => {
  return (
    <div>
      <div>username: {props.username}</div>contact
    </div>
  );
};

export default withAuthContext(ContactPage);
