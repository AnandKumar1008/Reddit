import React, { createContext, useContext, useEffect, useState } from "react";
import AddPost from "../../Components/AddPost/AddPost";
import Nav from "../../Components/Nav/Nav";
import Allposts from "../../Components/AllPosts/AllPosts";
import "./Home.css";
// export const MyContext = createContext();
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Menu from "../../Components/Menu/Menu";
import RightSection from "../../Components/RightSection/RightSection";
import CreatePassword from "../../Components/Signup/CreatePassword";
import Post from "../../Components/Post/Post";
import { MyContext } from "../../App";
import Stick from "../Popular/Stick";

const Home = () => {
  const {
    update,
    setUpdate,
    login,
    setLogin,
    theme,
    setTheme,
    overlay,
    setOverlay,
    newPost,
    setNewPost,
    showForm,
    setShowForm,
    userName,
    setUserName,
    postItem,
    setPostItem,
    allComment,
    userPhoto,
    setUserPhoto,
    setLoading,
    loading,
    over_lay,
    menu,
    setMenu,
  } = useContext(MyContext);

  useEffect(() => {
    const fireBaseApi = async () => {
      setLoading("Loading...");
      const response = await fetch(
        "https://redditdata-3dd62-default-rtdb.firebaseio.com/database.json"
      );
      const data = await response.json();
      console.log(data);
      setUpdate(Object.values(data || {}).reverse());
      setLoading("");
    };
    fireBaseApi();
    // const reddit
    const user = JSON.parse(localStorage.getItem("reddit_google"));
    if (user?.userName) {
      setUserName(user.userName);
      setUserPhoto(user.userPhoto);
      setLogin(true);
      return;
    }
  }, []);

  return (
    <div
      className="reddit_clone-app"
      style={showForm == "none" ? {} : over_lay}
    >
      <Nav />

      <div className="reddit_clone-app_total_posts">
        {menu && (
          <div className="reddit_clone-app_pseudo">
            <Menu />
          </div>
        )}
        <div className="reddit_clone-home_section">
          <div className="reddit_clone-app_total_post_comp">
            {newPost ? (
              <div className="reddit_clone-app_create_post">
                <CreatePost setNewPost={setNewPost} />
              </div>
            ) : (
              <div className="reddit_clone-app_add_post">
                {login ? <AddPost setNewPost={setNewPost} /> : ""}
                <Stick />
                <Allposts />
              </div>
            )}
          </div>

          <div className="reddit_clone-app_right_section">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
