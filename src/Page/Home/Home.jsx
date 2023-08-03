import React, { useContext, useEffect } from "react";
import AddPost from "../../Components/AddPost/AddPost";
import Allposts from "../../Components/AllPosts/AllPosts";
import Nav from "../../Components/Nav/Nav";
import "./Home.css";
import { MyContext } from "../../App";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Menu from "../../Components/Menu/Menu";
import RightSection from "../../Components/RightSection/RightSection";
import Stick from "../Popular/Stick";

const Home = () => {
  const {
    setUpdate,
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

  useEffect(() => {
    const fireBaseApi = async () => {
      const response = await fetch(
        "https://redditdata-3dd62-default-rtdb.firebaseio.com/database.json"
      );
      const data = await response.json();
      setUpdate(Object.values(data || {}).reverse());
    };
    // fireBaseApi();

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
