import React, { useContext, useEffect } from "react";
import AddPost from "../../Components/AddPost/AddPost";
import Allposts from "../../Components/AllPosts/AllPosts";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Menu from "../../Components/Menu/Menu";
import Nav from "../../Components/Nav/Nav";
import RightSection from "../../Components/RightSection/RightSection";
import { MyContext } from "../../MyContext";
import Stick from "../Popular/Stick";
import "./Home.css";
const Home = () => {
  const {
    login,
    setLogin,
    newPost,
    setNewPost,
    showForm,
    setUserName,
    setUserPhoto,
    over_lay,
    menu,
  } = useContext(MyContext);

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
