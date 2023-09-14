import React, { useContext } from "react";
import Comment from "../../Components/Comment/Comment";
import Nav from "../../Components/Nav/Nav";
import { MyContext } from "../../MyContext";
import { useParams } from "react-router-dom";

const CommentPage = () => {
  const { id } = useParams();
  const { showForm, over_lay } = useContext(MyContext);
  return (
    <div style={showForm == "none" ? {} : over_lay}>
      <Comment id={id} />
      <Nav />
    </div>
  );
};

export default CommentPage;
