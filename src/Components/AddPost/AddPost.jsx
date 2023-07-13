import React, { useRef, useState, createContext, useContext } from "react";
import Post from "../Post/Post";
import "./AddPost.css";
import { MyContext } from "../../App";
import { FaReddit } from "react-icons/fa";
const AddPost = ({ newPost, setNewPost }) => {
  const { update, setUpdate } = useContext(MyContext);
  const inputRef = useRef();
  // const [upload, setUpload] = useState([]);
  const handleClick = () => {
    if (inputRef.current.value.length == 0) return;
    setUpdate([
      <Post post={inputRef.current.value} key={update.length} />,
      ...update,
    ]);
    inputRef.current.value = "";
  };
  return (
    <div className="reddit_clone-addpost section__padding">
      <div className="reddit_clone-addpost_input">
        <FaReddit className="reddit_clone-addPost_icon" />
        <input
          type="text"
          ref={inputRef}
          placeholder="create post"
          onClick={() => {
            setNewPost(true);
          }}
        />
        <button className="reddit_clone-addPost" onClick={handleClick}>
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
