import React, { useContext } from "react";
import { AiFillHome, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { BsFileBarGraph, BsShield } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoShirtOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import "./Menu.css";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { arr } from "../NavMenuArray";
const darkModeStyle = {
  backgroundColor: "var(--color-lightDark)",
  color: "white",
};
const Menu = () => {
  const navigate = useNavigate();
  const {
    setNewPost,
    setIsAllPage,
    setIsPopularPage,
    menu,
    setNavMenu,
    setMenu,
    setRedditIndex,
    setFilterPost,
  } = useContext(MyContext);
  return (
    <div
      className="reddit_clone-menu"
      style={menu ? {} : { display: "none" }}
      onClick={(e) => {
        setNavMenu((prev) =>
          e.target?.id ? arr[parseInt(e.target.id) - 1] : prev
        );
        setFilterPost([]);
      }}
    >
      <div className="reddit_clone-menu_close">
        <button onClick={() => setMenu(false)}>X</button>
      </div>
      <p>FEEDS</p>
      <button
        id="1"
        onClick={() => {
          setNewPost(false);
          navigate("/");
          setIsPopularPage(false);
        }}
      >
        {" "}
        <AiFillHome className="react_clone-menu_icons" /> Home
      </button>
      <button
        id="2"
        onClick={() => {
          setRedditIndex((p) => p + 1);
          navigate("/popular");
          setIsAllPage(false);
          setIsPopularPage(true);
        }}
      >
        <BsArrowUpRightCircle className="react_clone-menu_icons" /> Popular
      </button>
      <button
        id="3"
        onClick={() => {
          setIsAllPage(true);
          setRedditIndex((p) => p + 1);
          navigate("/popular");
        }}
      >
        <BsFileBarGraph className="react_clone-menu_icons" /> All
      </button>
      <p>OTHER</p>
      <button id="4" onClick={() => navigate("/comingpage")}>
        <RiUserSettingsLine className="react_clone-menu_icons" /> User Setting
      </button>
      <button
        id="5"
        onClick={() => {
          navigate("/messages");
        }}
      >
        <AiOutlineMessage className="react_clone-menu_icons" /> Message
      </button>
      <button
        id="6"
        onClick={() => {
          setNewPost(true);
          navigate("/");
        }}
      >
        <AiOutlinePlus className="react_clone-menu_icons" /> Create Post
      </button>
      <button id="7" onClick={() => navigate("/notification")}>
        <IoIosNotificationsOutline className="react_clone-menu_icons" />{" "}
        Notifications
      </button>
      <button id="8" onClick={() => navigate("/coins")}>
        <CiCoinInsert className="react_clone-menu_icons" /> Coins
      </button>
      <button id="9" onClick={() => navigate("/premium")}>
        <BsShield className="react_clone-menu_icons" /> Premium
      </button>
      <button id="10" onClick={() => navigate("/comingpage")}>
        <IoShirtOutline className="react_clone-menu_icons" /> Avatar
      </button>
    </div>
  );
};

export default Menu;
