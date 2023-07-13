import React, { useContext, useState } from "react";
import "./Post.css";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import { FaDown } from "react-icons/fa";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { MyContext } from "../../App";
import { GoComment } from "react-icons/go";
import { FaShare } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { TbBoxPadding } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa";
import UserImage from "../UserImage";
import { GiAlienSkull } from "react-icons/gi";
export const Vote = ({ initialVote }) => {
  const [vote, setVote] = useState(parseInt(initialVote));
  const { login } = useContext(MyContext);
  const [oneVote, setOneVote] = useState({
    up: true,
    down: true,
  });

  const [val, setVal] = useState(vote);
  const handleUp = (e) => {
    e.stopPropagation();
    // console.log(e.target.name);
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

        <p>{vote}</p>
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
const Post = (props) => {
  const navigate = useNavigate();
  const { login, setId, allComment, setPostItem, userName, userPhoto } =
    useContext(MyContext);
  const handleComment = () => {
    // if (!login) return;
    setPostItem({
      props,
    });
    setId(props.id);
    console.log(props.id);
    if (!allComment[props.id]) allComment[props.id] = [];

    navigate("/comment");
  };
  // console.log(props.userName);
  return (
    <div className="reddit_clone-post" id={props.id} onClick={handleComment}>
      <div className="reddit_clone-post_vote_div">
        <Vote initialVote={props.vote} />
        {/* <div className="reddit_clone-post_vote_check">A </div> */}
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
        <h3>{props.title}</h3>
        <hr />
        {props?.image && (
          <div className="reddit_clone-post_image">
            <img src={props?.image} alt="" style={{ maxWidth: "100%" }} />
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
