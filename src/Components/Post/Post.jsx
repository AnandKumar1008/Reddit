import React, { useContext, useState } from "react";
import "./Post.css";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { MyContext } from "../../App";
import { GoComment } from "react-icons/go";
import { FaShare } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbBoxPadding } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa";
import UserImage from "../UserImage";
import { GiAlienSkull } from "react-icons/gi";
export const Vote = ({ initialVote = 0 }) => {
  const [vote, setVote] = useState(parseInt(initialVote));
  const { login } = useContext(MyContext);
  const [oneVote, setOneVote] = useState({
    up: true,
    down: true,
  });

  const [val, setVal] = useState(vote);
  const handleUp = (e) => {
    e.stopPropagation();
    if (!login) return;
    if (oneVote.up) {
      setVote(val + 1);
      setOneVote({ up: false, down: true });
    } else {
      setVote(val);
      setOneVote({ up: true, down: true });
    }
  };
  const handleDown = (e) => {
    e.stopPropagation();
    if (!login) return;
    if (oneVote.down) {
      setVote(val - 1);
      setOneVote({ up: true, down: false });
    } else {
      setVote(val);
      setOneVote({ up: true, down: true });
    }
  };
  return (
    <div className="reddit_clone-post_button">
      <div className="reddit_clone-post_button_upvote">
        <ImArrowUp
          className="reddit_clone-arrow_up"
          onClick={handleUp}
          name="upvote"
          style={vote == val + 1 ? { color: "var(--color-orgred)" } : {}}
        />

        {vote < 1000 && <p>{vote}</p>}
        {vote >= 1000 && <p> {Math.ceil(vote / 100) / 10}k</p>}
        <ImArrowDown
          className="reddit_clone-arrow_down"
          onClick={handleDown}
          name="downvote"
          style={vote == val - 1 ? { color: "var(--color-a-light)" } : {}}
        />
      </div>
    </div>
  );
};

function VideoPlayer(props) {
  const [playing, setPlaying] = useState(true);

  function handleClick(e) {
    setPlaying(true);
    e.stopPropagation();
  }

  return (
    <div onClick={handleClick} className="reddit_clone-post_video_player">
      {playing ? (
        <video src={props.url} controls autoplay />
      ) : (
        <img src={props.thumbnail} alt="Video thumbnail" />
      )}
    </div>
  );
}

const Post = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, setId, allComment, setPostItem, setPath } =
    useContext(MyContext);
  const handleComment = () => {
    setPostItem({
      props,
    });
    setId(props.id);
    if (!allComment[props.id]) allComment[props.id] = [];
    setPath(location.path);
    navigate("/comment");
  };
  return (
    <div className="reddit_clone-post" id={props.id} onClick={handleComment}>
      <div className="reddit_clone-post_vote_div">
        <Vote initialVote={props?.vote} />
      </div>
      <div className="reddit_clone-post_data">
        <div className="reddit_clone-post_title">
          <p>
            {" "}
            {props.userPhoto ? (
              <UserImage src={props?.userPhoto} />
            ) : (
              <GiAlienSkull />
            )}{" "}
            {props.userName ? props.userName : "Reddit Items"}
          </p>
        </div>
        <h3 style={{ color: "var(--color-rightsection-footer)" }}>
          {props.title}
        </h3>
        <hr />
        {props?.image && (
          <div className="reddit_clone-post_image">
            <img src={props?.image} alt="" style={{ maxWidth: "100%" }} />
          </div>
        )}
        {props?.video_url && (
          <div className="reddit_clone-post_video">
            <VideoPlayer url={props?.video_url} thumbnail={props?.thumbnail} />
          </div>
        )}
        <p className="reddit_clone-post_textArea">{props.textArea}</p>
        <div className="reddit_clone-post_textArea_overlay"></div>
        <div className="reddit_clone-post_comments">
          <button onClick={handleComment}>
            <GoComment />
            {allComment[props.id]?.length} Comments
          </button>
          <button>
            <FaShare /> Share
          </button>
          <button>
            <BsSave />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
