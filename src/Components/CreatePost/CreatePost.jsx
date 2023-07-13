import React, { useState } from "react";
import "./CreatePost.css";
import PostText from "./PostText";
import { BsFillFileEarmarkPostFill, BsFileImage } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { FaPollH } from "react-icons/fa";
const TextArea = ({ col, row, placeholder }) => {
  return (
    <>
      <textarea
        name=""
        id=""
        cols={col}
        rows={row}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

// const type=[<TextArea key={0} col={30} row={10}  placeholder={`Text (Optional)`}/>, <img key={1}/>,
// <TextArea key={2} col={10} row={5} placeholder={`Url`}/>,<TextArea key={3}  col={30} row={10}  placeholder={`Text (Optional)`}/>];
const makeStyle = {
  borderBottom: "2px solid var(--color-a)",
  color: "var(--color-a)",
};
const CreatePost = () => {
  // const [clicked,setClicked]=useState();
  const [postType, setPosttype] = useState("post");
  const handleClick = (e) => {
    //  setClicked(e.target);

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
      {/* <hr style={{ backgroundColor: "var(--color-bg)" }} /> */}
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
