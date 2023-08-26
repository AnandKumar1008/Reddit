import React, { useContext } from "react";
import Comment from "../../Components/Comment/Comment";
import Nav from "../../Components/Nav/Nav";
import { MyContext } from "../../MyContext";

const CommentPage = () => {
  const { showForm, over_lay } = useContext(MyContext);
  return (
    <div style={showForm == "none" ? {} : over_lay}>
      <Comment />
      <Nav />
    </div>
  );
};

export default CommentPage;
