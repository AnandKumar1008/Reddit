import React, { useContext } from "react";
import Message from "../../Components/Message/Message";
import Nav from "../../Components/Nav/Nav";
import { MyContext } from "../../App";

const Messages = () => {
  const { over_lay, showForm } = useContext(MyContext);
  return (
    <div style={showForm == "none" ? {} : over_lay}>
      <Message />
      <Nav />
    </div>
  );
};

export default Messages;
