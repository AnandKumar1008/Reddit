import React, { createContext, useState, useRef } from "react";
import { arr } from "./Components/NavMenuArray";
const allComment = JSON.parse(localStorage.getItem("reddit_comment")) || {};
export const MyContext = createContext();
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
const MyProvider = ({ children }) => {
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
  const [pseudoPost, setPseudoPost] = useState([]);
  return (
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
        pseudoPost,
        setPseudoPost,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
