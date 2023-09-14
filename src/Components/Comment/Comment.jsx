import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSave } from "react-icons/bs";
import { FaShare, FaUserAstronaut } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { Vote } from "../Post/Post";
import UserImage from "../UserImage";
import "./Comment.css";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import { formatDistanceToNow } from "date-fns";
export const MakeComment = ({
  textArea,
  userName,
  userPhoto,
  createdAt,
  loading,
  setLoading,
}) => {
  return (
    <div className="reddit_clone-comment_item">
      <div className="reddit_clone-comment_item_avatar">
        {userPhoto ? (
          <div className="reddit_clone-comment_user_img">
            <img src={userPhoto} alt="" style={{ maxWidth: "100%" }} />
          </div>
        ) : (
          <FaUserAstronaut />
        )}
      </div>
      <div className="reddit_clone-comment_item_text">
        <span style={{ fontWeight: "bold", fontFamily: "var(--font-c)" }}>
          {userName}-
        </span>
        <span style={{ fontWeight: 200, margin: "0 1rem" }}>
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
        <hr />
        <p>{textArea}</p>
      </div>
    </div>
  );
};
const Comment = ({ id }) => {
  const navigate = useNavigate();
  const {
    postItem,
    setPostItem,
    userName,
    path,
    login,
    userId,
    loading,
    setLoading,
  } = useContext(MyContext);
  const [comment, setComment] = useState([]);
  const inpRef = useRef();
  const getPostComment = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/comment/post/${id}`);
      const data = res.data.data;

      setComment(data.reverse() || []);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const handleComment = async () => {
    if (inpRef.current.value === "") return;
    if (!login) return;

    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/comment/upload`, {
        comment: inpRef.current.value,
        user: userId,
        post: id,
      });
      getPostComment();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    inpRef.current.value = "";
  };

  useEffect(() => {
    getPostComment();
  }, []);
  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/api/v1/post/${id}`);
        const data = res.data.data;
        setPostItem(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getPost();
    return () => {
      window.location.reload();
      setLoading(true);
    };
  }, []);

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
          <p>{postItem?.title}</p>
          <div
            className="reddit_clone-comment_close_icon"
            onClick={() => {
              navigate(path || "/");
            }}
          >
            <AiOutlineClose className="reddit_clone-coment_close_X" />{" "}
            <p>Close</p>
          </div>
        </div>
        <div className="reddit_clone-comment">
          <Vote initialVote={postItem?.vote || 0} />
          <div className="reddit_clone-comment_post">
            <div className="reddit_clone-comment_user">
              <UserImage src={postItem?.userPhoto} />
              <p>{postItem?.userName}</p>
            </div>
            <div className="reddit_clone-comment_items">
              <h3>{postItem?.title}</h3>
              <img
                src={postItem?.img || postItem.image}
                alt=""
                style={{
                  maxWidth: "100%",
                  border: "1px solid var(--color-border)",
                }}
              />
              <p>{postItem?.textArea}</p>
            </div>
            <div className="reddit_clone-comment_comment_option">
              <button>
                <GoComment /> {comment?.length} Comments
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
                  key={comment._id}
                  textArea={comment.comment}
                  userName={comment.user.userName}
                  userPhoto={comment.user.userPhoto}
                  createdAt={comment.createdAt}
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
