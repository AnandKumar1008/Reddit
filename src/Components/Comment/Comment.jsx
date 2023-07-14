import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../App";
import "./Comment.css";
import { Vote } from "../Post/Post";
import { GoComment } from "react-icons/go";
import { FaShare } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import UserImage from "../UserImage";

export const MakeComment = ({ textArea, userName }) => {
  // console.log(textArea);
  return (
    <div className="reddit_clone-comment_item">
      <div className="reddit_clone-comment_item_avatar">
        <FaUserAstronaut />
      </div>
      <div className="reddit_clone-comment_item_text">
        <span style={{ fontWeight: "bold", fontFamily: "var(--font-c)" }}>
          {userName}-
        </span>
        <span style={{ fontWeight: 200, margin: "0 1rem" }}>{0}hrs ago</span>
        <hr />
        <p>{textArea}</p>
      </div>
    </div>
  );
};
const Comment = () => {
  const navigate = useNavigate();
  const { postItem, userName, id, setId, allComment, login } =
    useContext(MyContext);
  const [comment, setComment] = useState(allComment[id] || []);
  const { props = {} } = postItem;
  const inpRef = useRef();

  const handleComment = () => {
    if (inpRef.current.value === "") return;
    if (!login) return;
    allComment[id]?.unshift({ userName, textArea: inpRef.current.value });
    setComment([...allComment[id]]);
    localStorage.setItem("reddit_comment", JSON.stringify(allComment));
    inpRef.current.value = "";
  };

  return (
    <div
      className="reddit_clone-comment_container"
      onClick={() => {
        navigate("/");
      }}
    >
      <div
        className="reddit_clone-comment_cover"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="reddit_clone-comment_close">
          <p>{props.title}</p>
          <div
            className="reddit_clone-comment_close_icon"
            onClick={() => {
              navigate("/");
            }}
          >
            <AiOutlineClose className="reddit_clone-coment_close_X" />{" "}
            <p>Close</p>
          </div>
        </div>
        <div className="reddit_clone-comment">
          <Vote initialVote={Math.ceil(Math.random())} />
          <div className="reddit_clone-comment_post">
            <div className="reddit_clone-comment_user">
              <UserImage src={props?.userPhoto} />
              <p>{props?.userName}</p>
            </div>
            <div className="reddit_clone-comment_items">
              <h3>{props?.title}</h3>
              <img
                src={props?.image}
                alt=""
                style={{
                  maxWidth: "100%",
                  border: "1px solid var(--color-border)",
                }}
              />
              <p>{props?.textArea}</p>
            </div>
            <div className="reddit_clone-post_comments">
              <button>
                <GoComment /> {allComment[id]?.length} Comments
              </button>
              <button>
                <FaShare /> Share
              </button>
              <button>
                <BsSave />
                Save
              </button>
            </div>
            <div className="reddit_clone-comment_area">
              <p>
                comment as <span>{userName}</span>
              </p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="what are your thoughts"
                ref={inpRef}
              ></textarea>
              <div className="reddit_clone-comment_btn">
                <button onClick={handleComment}>comment</button>
              </div>
            </div>
            <div className="reddit_clone-comment_past_comment">
              {comment?.map((comment) => (
                <MakeComment
                  key={id}
                  textArea={comment.textArea}
                  userName={comment.userName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;