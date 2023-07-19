import React, { useContext, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import "./PostText.css";
import Post from "../Post/Post";
import { MyContext } from "../../App";
const ImageUpload = ({ setImg }) => {
  const handleChange = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="reddit_clone-createpost_img">
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          style={{ maxWidth: "100%" }}
        ></img>
      ) : (
        <input type="file" name="" id="" onChange={handleChange} />
      )}
    </div>
  );
};
const PostText = (props) => {
  const {
    update,
    setUpdate,
    setNewPost,
    allComment,
    userName,
    userPhoto,
    login,
  } = useContext(MyContext);
  const [wait, setWait] = useState();
  const inpRef = useRef();
  const [image, setImage] = useState();
  const [inp, setInp] = useState({
    title: "",
    textArea: "",
  });
  const { post } = props;
  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handlePost = async () => {
    if (!login) return;
    setWait("Please Wait...");
    setUpdate([
      {
        userName: userName,
        userPhoto,
        id: `${update.length + 1}`,
        title: inp?.title,
        image: image,
        vote: 0,
        textArea: inp?.textArea,
      },

      ...update,
    ]);
    // ******************************************************
    const response = await fetch(
      "https://redditdata-3dd62-default-rtdb.firebaseio.com/database.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userPhoto,
          userName: userName,
          key: update.length,
          id: `${update.length + 1}`,
          title: inp.title,
          image: image,
          vote: 0,
          textArea: inp?.textArea,
        }),
      }
    );

    if (response.ok) {
      console.log("Post request successful");
    } else {
      console.error("Error:", response.status);
    }
    // *************USEDLOCAL STORAGE********************************************

    // const localData = JSON.parse(localStorage.getItem("reddit_post")) || [];
    // localData.push({
    //   id: `${update.length + 1}`,
    //   title: inp.title,
    //   vote: 0,
    //   image: image,
    //   textArea: inp.textArea,
    // });
    // localStorage.setItem("reddit_post", JSON.stringify(localData));
    // *********************************************************************************
    // const localData = localStorage.getItem("reddit_post");
    // localData.unshift(
    //   <Post
    //     key={update.length}
    //     id={update.length}
    //     title={inp.title}
    //     vote={0}
    //     textArea={inp.textArea}
    //   />
    // );
    // localStorage.setItem("reddit_post", JSON.stringify(localData));
    // setAllComment([[],...allComment])
    // allComment.push([]);
    setWait(null);
    setNewPost((p) => !p);
  };
  return (
    <div className="reddit_clone-post_type">
      <input
        type="text"
        placeholder="Title"
        name="title"
        maxLength={300}
        onChange={handleChange}
        value={inp.title}
      />
      {post == "img_video" && (
        <div className="reddit_clone-post_image">
          {image ? (
            <div>
              <img src={image} style={{ maxWidth: "100%" }}></img>
              <br />
              <button style={{ margin: "1rem 0" }} onClick={() => setImage("")}>
                Delete
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => inpRef.current.click()}> Upload</button>
              <input type="file" onChange={handleImage} ref={inpRef} />
            </div>
          )}
        </div>
      )}
      <textarea
        name="textArea"
        id=""
        cols="30"
        rows={post == "link" ? "5" : post === "img_video" ? "5" : "10"}
        placeholder={post == "link" ? "Url" : "Text(Optional)"}
        onChange={handleChange}
        value={inp.textArea}
      ></textarea>
      <div className="reddit_clone-post_type_buttons">
        <button className="">
          <AiOutlinePlus />
          type
        </button>
        <button>
          <AiOutlinePlus /> Spoiler
        </button>
        <button>
          <AiOutlinePlus /> NFW
        </button>
      </div>
      <div className="reddit_clone-post_type_save">
        <button
          style={
            inp.title.length == 0
              ? {
                  backgroundColor: "var(--color-border)",
                  borderColor: "var(--color-border)",
                  color: "gray",
                }
              : {}
          }
        >
          SaveDraft
        </button>
        <button
          onClick={handlePost}
          style={
            inp.title.length == 0
              ? {
                  backgroundColor: "var(--color-border)",
                  borderColor: "var(--color-border)",
                  color: "gray",
                }
              : {}
          }
          disabled={inp.title.length == 0}
          method="POST"
        >
          {wait || "Post"}
        </button>
      </div>
      <div className="reddit_clone-post_type_notification">
        <div className="reddit_clone-post_type_checkbox">
          <input type="checkbox" id="notification" checked />
          <label htmlFor="notification">Send me post reply notifications</label>
        </div>
        <p>
          Connect Accounts to share your post <GrCircleInformation />
        </p>
      </div>
    </div>
  );
};

export default PostText;
