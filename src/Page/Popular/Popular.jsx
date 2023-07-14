import React, { createContext, useContext, useEffect, useState } from "react";
import AddPost from "../../Components/AddPost/AddPost";
import Nav from "../../Components/Nav/Nav";
import Allposts from "../../Components/AllPosts/AllPosts";
// import AllPosts from "../../Components/AllPosts/AllPosts";
import "./Popular.css";
// export const MyContext = createContext();
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Menu from "../../Components/Menu/Menu";
import RightSection from "../../Components/RightSection/RightSection";
import CreatePassword from "../../Components/Signup/CreatePassword";
import Post from "../../Components/Post/Post";
import { MyContext } from "../../App";
import img1 from "../../Components/Image/lounge.jpg";
import img2 from "../../Components/Image/customapp.jpg";
import img3 from "../../Components/Image/coins.jpg";
import img4 from "../../Components/Image/lounge.jpg";
import Stick from "./Stick";
const crr = [
  "r/funny",
  "r/gifs",
  "r/pics",
  "r/videos",
  "r/aww",
  "r/worldnews",
  "r/science",
  "r/gaming",
  "r/movies",
  "r/music",
];
const subreddit = "all";
const rand = "https://www.reddit.com/r/random/.json?limit=30";
const randomUrl =
  "https://www.reddit.com/r/" + subreddit + "/random.json?limit=30";
const over_lay = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  pointerEvents: "none",
};
const Popular = () => {
  const {
    setUpdate,
    setLogin,

    showForm,

    setUserName,

    setUserPhoto,
    setLoading,
    isAllPage,
    menu,
    apiposts,
    setApiPosts,
  } = useContext(MyContext);

  useEffect(() => {
    const fireBaseApi = async () => {
      setLoading("Loading...");
      const response = await fetch(
        "https://redditclone-59718-default-rtdb.firebaseio.com/database.json"
      );
      const data = await response.json();
      console.log(data);
      setUpdate(Object.values(data || {}).reverse());
      setLoading("");
    };
    const redditApi = async () => {
      const response = await fetch(
        "https://www.reddit.com/r/all/top.json?limit=20"
      );
      // "https://www.reddit.com/r/all/top.json?limit=20"
      const data = await response.json();
      console.log(data);
      console.log(data?.data?.children);
      const arr = data?.data?.children;
      const posts = [];
      arr?.forEach((e, i) => {
        posts.push({
          userPhoto: e.data?.photo,
          userName: e.data?.author,
          key: e.data?.id,
          id: e.data?.id,
          title: e.data?.title,
          image: e.data?.url,
          vote: e.data?.ups,
          textArea: e.data?.textArea,
          thumbnail: e.data?.thumbnail,
          video_url: e.data?.media?.reddit_video?.fallback_url,
        });
      }, []);
      setApiPosts(posts);
    };
    redditApi();
    // fireBaseApi();
    // const user = JSON.parse(localStorage.getItem("reddit_google"));
    // if (user?.userName) {
    //   setUserName(user.userName);
    //   setUserPhoto(user.userPhoto);
    //   setLogin(true);
    //   return;
    // }
    // const reddit = JSON.parse(localStorage.getItem("reddit_clone"));
    // if (reddit?.length > 0) {
    //   setLogin(true);
    //   setUserName(reddit[0]?.username);
    // }
  });

  return (
    <div
      className="reddit_clone-app"
      style={showForm == "none" ? {} : over_lay}
    >
      <div style={showForm == "none" ? {} : over_lay}>
        {showForm == "Login" ? (
          <Login />
        ) : showForm == "Signup" ? (
          <Signup />
        ) : showForm == "create_password" ? (
          <CreatePassword />
        ) : (
          false
        )}
      </div>
      <div className="reddit_clone-app_total_posts">
        {menu && (
          <div className="reddit_clone-popular_pseudo">
            <Menu />
          </div>
        )}
        {/* <div className="reddit_clone-app_total_post_comp"> */}
        <div className="reddit_clone-popular_section">
          {isAllPage ? (
            false
          ) : (
            <div className="reddit_clone-popular_img">
              <div className="reddit_clone-popular_image_item">
                <img src={img1} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div>
              <div className="reddit_clone-popular_image_item">
                <img src={img2} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div>
              <div className="reddit_clone-popular_image_item">
                <img src={img3} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div>
              <div className="reddit_clone-popular_image_item">
                <img src={img4} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div>
            </div>
          )}
          {isAllPage ? (
            false
          ) : (
            <p className="reddit_clone-popular_post">Popular Post</p>
          )}
          <div
            className="reddit_clone-popular_section_comp"
            style={isAllPage ? { margin: "4rem 0" } : {}}
          >
            <div className="reddit_clone-popular_add_post">
              <Stick />
              <Allposts />
            </div>

            <div className="reddit_clone-popular_right_section">
              <RightSection />
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Popular;
