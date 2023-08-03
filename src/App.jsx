import React, { createContext, useEffect, useState } from "react";
import Home from "./Page/Home/Home.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Comment from "./Components/Comment/Comment.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Menu from "./Components/Menu/Menu.jsx";
export const MyContext = createContext();
import Signup from "./Components/Signup/Signup";
// import CreatePost from "./Components/CreatePost/CreatePost";

import { initialPosts } from "./Components/initialPosts.jsx";
import Post from "./Components/Post/Post.jsx";
import { MakeComment } from "./Components/Comment/Comment.jsx";
import "./App.css";
import Premium from "./Components/Premium/Premium.jsx";
import PremiumPage from "./Page/PremiumPage/PremiumPage.jsx";
import Popular from "./Page/Popular/Popular.jsx";
import Messages from "./Page/Messages/Messages.jsx";
import NotificationPage from "./Page/NotificationPage/NotificationPage.jsx";
import Coinspage from "./Page/CoinsPage/Coinspage.jsx";
import Login from "./Components/Login/Login.jsx";
import Comingpage from "./Page/Comingpage/Comingpage.jsx";
import CommentPage from "./Page/CommentPage/CommentPage.jsx";
const allComment = JSON.parse(localStorage.getItem("reddit_comment")) || {};
import { arr } from "./Components/NavMenuArray.jsx";
import CreatePassword from "./Components/Signup/CreatePassword.jsx";
import RedditQr from "./Components/RedditQr/RedditQr.jsx";
// const localComment = JSON.parse(localStorage.getItem("reddit_comment")) || {};
if (!localStorage.getItem("reddit_post")) {
  localStorage.setItem("reddit_post", JSON.stringify(initialPosts));
}
const subReddit = [
  "funny",
  "gifs",
  "pics",
  "videos",
  "aww",
  "worldnews",
  "science",
  "gaming",
  "movies",
  "music",
];
const App = () => {
  const [update, setUpdate] = useState([]);
  const [login, setLogin] = useState(false);

  const [newPost, setNewPost] = useState(false);
  const [showForm, setShowForm] = useState("none");
  const [userName, setUserName] = useState("");
  const [postItem, setPostItem] = useState({});
  const [id, setId] = useState(0);
  const [userPhoto, setUserPhoto] = useState();
  const [loading, setLoading] = useState("");
  const [theme, setTheme] = useState("light-theme");
  const [isAllPage, setIsAllPage] = useState(false);
  const [isPopularPage, setIsPopularPage] = useState(false);
  const [menu, setMenu] = useState(window.innerWidth > 1200);
  const [navMenu, setNavMenu] = useState(arr[0]);
  const [apiPosts, setApiPosts] = useState([]);
  const [redditIndex, setRedditIndex] = useState(0);
  const [path, setPath] = useState("/");
  const [qr, setQr] = useState(false);
  const [filterPost, setFilterPost] = useState([]);
  const [search, setSearch] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (newPost) setNavMenu(arr[5]);
    else if (location.pathname == "/") setNavMenu(arr[0]);
    else if (location.pathname == "/popular") setNavMenu(arr[1]);
    else if (isAllPage) setNavMenu(arr[2]);
    else if (location.pathname == "/message") setNavMenu(arr[4]);
    else if (location.pathname == "/notification") setNavMenu(arr[6]);
    else if (location.pathname == "/coins") setNavMenu(arr[7]);
    else if (location.pathname == "/premium") setNavMenu(arr[8]);
  }, []);
  const over_lay = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
    zIndex: "9999",
  };
  useEffect(() => {
    console.log(theme);
    document.body.className = theme;
    document.body.style.backgroundColor = "var(--color-background)";
    const current_user = localStorage.getItem("current_user");
    if (current_user) setUserName(JSON.parse(current_user));
  }, [theme]);

  return (
    <div
      className="reddit_clone-app"
      style={qr ? { pointerEvents: "none", overflow: "hidden" } : {}}
    >
      <MyContext.Provider
        value={{
          path,
          setPath,
          id,
          setId,
          update,
          setUpdate,
          login,
          setLogin,
          showForm,
          setShowForm,
          theme,
          setTheme,
          newPost,
          setNewPost,
          userName,
          setUserName,
          postItem,
          setPostItem,
          allComment,
          userPhoto,
          setUserPhoto,
          loading,
          setLoading,
          isAllPage,
          setIsAllPage,
          isPopularPage,
          setIsPopularPage,
          over_lay,
          menu,
          setMenu,
          navMenu,
          setNavMenu,
          apiPosts,
          setApiPosts,
          redditIndex,
          setRedditIndex,
          subReddit,
          qr,
          setQr,
          filterPost,
          setFilterPost,
          search,
          setSearch,
        }}
      >
        <Routes>
          <Route path="/comment" element={<CommentPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/coins" element={<Coinspage />} />
          <Route path="/comingpage" element={<Comingpage />} />
        </Routes>

        <div
          className="reddit_clone-app_authentication"
          style={showForm == "none" ? {} : over_lay}
        >
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
        {qr && (
          <div className="reddit_clone-app_qr" style={qr ? over_lay : {}}>
            <RedditQr />
          </div>
        )}
      </MyContext.Provider>
    </div>
  );
};

export default App;
