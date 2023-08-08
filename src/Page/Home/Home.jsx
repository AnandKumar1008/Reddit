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
import { apiUrl } from "../Popular/Popular";
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
    setPseudoPost,
  } = useContext(MyContext);

  useEffect(() => {
    const showNewImages = async () => {
      const res = await fetch(`${apiUrl}`);
      const data = await res.json();
      const arr = [];
      console.log(data);
      data.forEach((item, i) => {
        arr.push({
          title: item?.alt_description,
          id: item.id,
          image: item?.urls?.regular,
          vote: Math.ceil(Math.random() * 1000),
          textArea: "",
        });
      });
      console.log(arr, "home data");
      setPseudoPost(arr || []);
    };
    showNewImages();
    const fireBaseApi = async () => {
      const response = await fetch(
        "https://redditdata-3dd62-default-rtdb.firebaseio.com/database.json"
      );
      const data = await response.json();
      // console.log(data);
      const arr = [];
      Object.entries(data).forEach(([key, value]) =>
        arr.push({ ...value, id: key })
      );
      // setUpdate(Object.values(data || {}).reverse());
      // console.log(arr);
      setUpdate(arr || []);
    };
    fireBaseApi();

    const user = JSON.parse(localStorage.getItem("reddit_google"));
    if (user?.userName) {
      setUserName(user.userName);
      setUserPhoto(user.userPhoto);
      setLogin(true);
      return;
    }
    const checkUser = JSON.parse(localStorage.getItem("current_user")) || "";

    if (checkUser) {
      setUserName(checkUser);
      setLogin(true);
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
