import React, { useContext, useEffect, useState } from "react";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import "./Post.css";
import { BsSave } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { GiAlienSkull } from "react-icons/gi";
import { GoComment } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../../MyContext";
import UserImage from "../UserImage";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
export const Vote = ({ initialVote = 0 }) => {
  const [vote, setVote] = useState(parseInt(initialVote));
  const { login, setShowForm } = useContext(MyContext);
  const [oneVote, setOneVote] = useState({
    up: true,
    down: true,
  });

  const [val, setVal] = useState(vote);
  const handleUp = (e) => {
    e.stopPropagation();
    if (!login) {
      setShowForm("Login");
      return;
    }
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
    if (!login) {
      setShowForm("Login");
      return;
    }
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
        <video src={props?.url} controls autoplay />
      ) : (
        <img src={props?.thumbnail} alt="Video thumbnail" />
      )}
    </div>
  );
}
let copyLink = "https://reddit-random.netlify.app";

const Post = (props) => {
  const [share, setShare] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [save, setSave] = useState(false);
  const [count, setCount] = useState(0);
  const {
    login,
    setId,
    allComment,
    setPostItem,
    setPath,
    setShowForm,
    loading,
    setLoading,
  } = useContext(MyContext);
  const handleComment = () => {
    if (!login) {
      setShowForm("Login");
      return;
    }
    let id = props.id;
    const postExist = async () => {
      try {
        setLoading(true);
        const res = await axios.post(`${BASE_URL}/api/v1/post/nouser`, {
          title: props.title,
          textArea: props.textArea || "",
          img: props.image,
          vote: props.vote || Math.floor(Math.random() * 1000),
          user: "6502b6ebb99bcb9137becd9f",
          video_url: props?.video_url,
          thumbnail: props?.thumbnail,
        });
        const data = res.data.data;

        id = data._id;
        setId(id);
        setId(id);
        setPath(location.pathname);
        navigate(`/comment/${id}`);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (id.length != 24) {
      postExist();
    } else {
      setId(id);
      setPath(location.pathname);
      navigate(`/comment/${id}`);
    }
  };
  useEffect(() => {
    const CommentCount = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/comment/${props?.id}`);
        const data = res.data.count;
        setCount(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (props?.id?.length === 24) CommentCount();
  }, []);
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
            {props.userName ? props.userName : "Reddit Post"}
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
        <div
          className="reddit_clone-post_comments"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={handleComment}>
            <GoComment />
            {count} Comments
          </button>
          <button
            onClick={() => {
              setShare(true);
              setTimeout(() => {
                setShare(false);
              }, 2000);
              if (props?.id?.length === 24) {
                copyLink = `https://reddit-random.netlify.app/comment/${props.id}`;
              } else copyLink = "https://reddit-random.netlify.app";
              navigator.clipboard.writeText(copyLink);
              toast("Link copied to Clipboard", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
            disabled={share}
          >
            <FaShare /> Share
            <span></span>
          </button>
          <button
            onClick={() => {
              setSave(true);
              setTimeout(() => {
                setSave(false);
              }, 3000);
              toast("Post saved successful", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
            disabled={save}
          >
            <BsSave />
            Save
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Post;
