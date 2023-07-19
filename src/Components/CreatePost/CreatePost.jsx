import React, { useState } from "react";
import "./CreatePost.css";
import PostText from "./PostText";
import { BsFillFileEarmarkPostFill, BsFileImage } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { FaPollH } from "react-icons/fa";

const makeStyle = {
  borderBottom: "2px solid var(--color-a)",
  color: "var(--color-a)",
};
const CreatePost = () => {
  const [postType, setPosttype] = useState("post");
  const handleClick = (e) => {
    setPosttype(e.target.id);
  };
  return (
    <>
      <div className="reddit_clone-create_post_head">
        <h3>Create a post </h3>
        <button>
          Drafts<span>1</span>{" "}
        </button>
      </div>
      <div className="reddit_clone-create_post_line"></div>
      <select name="" id="" className="reddit_clone-create_post_select">
        <option value="">Choose A Community</option>
        <option value="">User</option>
      </select>
      <div className="reddit_clone-create_post">
        <div className="reddit_clone-create_post_links">
          <button
            id="post"
            onClick={handleClick}
            style={postType === "post" ? makeStyle : {}}
          >
            <BsFillFileEarmarkPostFill /> Post
          </button>
          <button
            id="img_video"
            onClick={handleClick}
            style={postType === "img_video" ? makeStyle : {}}
          >
            <BsFileImage /> Images& Video
          </button>
          <button
            id="link"
            onClick={handleClick}
            style={postType === "link" ? makeStyle : {}}
          >
            <HiLink /> Link
          </button>
          <button
            id="poll"
            onClick={handleClick}
            style={postType === "poll" ? makeStyle : {}}
          >
            <FaPollH /> Poll
          </button>
        </div>
        <div className="reddit_clone-create_post_types">
          <PostText post={postType} />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
