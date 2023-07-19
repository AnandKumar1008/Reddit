import React, { useRef, useState, createContext, useContext } from "react";
import Post from "../Post/Post";
import "./AddPost.css";
import { MyContext } from "../../App";
import { FaReddit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const AddPost = ({ setNewPost }) => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    setNewPost(true);
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
