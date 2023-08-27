import React, { useContext, useEffect } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login.jsx";
import { arr } from "./Components/NavMenuArray.jsx";
import RedditQr from "./Components/RedditQr/RedditQr.jsx";
import CreatePassword from "./Components/Signup/CreatePassword.jsx";
import Signup from "./Components/Signup/Signup";
import { initialPosts } from "./Components/initialPosts.jsx";
import { MyContext } from "./MyContext";
import Coinspage from "./Page/CoinsPage/Coinspage.jsx";
import Comingpage from "./Page/Comingpage/Comingpage.jsx";
import CommentPage from "./Page/CommentPage/CommentPage.jsx";
import Home from "./Page/Home/Home.jsx";
import Messages from "./Page/Messages/Messages.jsx";
import NotificationPage from "./Page/NotificationPage/NotificationPage.jsx";
import Popular from "./Page/Popular/Popular.jsx";
import PremiumPage from "./Page/PremiumPage/PremiumPage.jsx";
import NotFound from "./Components/NotFound/NotFound";
const acessKey = "zwTgacSWTV4UweSL2G1cKFPtPMtKQyJG7hBmlYtNKBo";
if (!localStorage.getItem("reddit_post")) {
  localStorage.setItem("reddit_post", JSON.stringify(initialPosts));
}
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${acessKey}&count=6`;

const App = () => {
  const {
    showForm,
    setNavMenu,
    theme,
    setPseudoPost,
    isAllPage,
    setUserName,
    qr,
    newPost,
    setUpdate,
    setLogin,
    setUserPhoto,
    images,
    setImages,
  } = useContext(MyContext);
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
      setImages(arr);
      setPseudoPost(arr || []);
    };
    showNewImages();
    const fireBaseApi = async () => {
      const response = await fetch(
        "https://redditdata-3dd62-default-rtdb.firebaseio.com/database.json"
      );
      const data = await response.json();
      const arr = [];
      Object.entries(data).forEach(([key, value]) =>
        arr.push({ ...value, id: key })
      );
      setUpdate(arr.reverse() || []);
    };
    fireBaseApi();

    document.body.className = theme;
    document.body.style.backgroundColor = "var(--color-background)";
    const current_user = localStorage.getItem("current_user");
    if (current_user) setUserName(JSON.parse(current_user));

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
  }, [theme]);

  return (
    <div
      className="reddit_clone-app"
      style={qr ? { pointerEvents: "none", overflow: "hidden" } : {}}
    >
      {" "}
      <div className="reddit_clone-app_top_mover">
        <a href="#">
          <BiUpArrowAlt />
        </a>
      </div>
      <Routes>
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/coins" element={<Coinspage />} />
        <Route path="/comingpage" element={<Comingpage />} />
        <Route path="*" element={<NotFound />} />
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
    </div>
  );
};

export default App;
