import React, { useContext } from "react";
import "./NavMenu.css";
// import { MyContext } from "../../App";
import { AiFillHome, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { BsArrowUpRightCircle, BsFileBarGraph, BsShield } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoShirtOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { arr } from "../NavMenuArray";
const darkModeStyle = {
  backgroundColor: "var(--color-lightDark)",
  color: "white",
};

const NavMenu = ({ width }) => {
  const navigate = useNavigate();
  const {
    setNewPost,
    setIsAllPage,
    setIsPopularPage,
    setRedditIndex,
    setNavMenu,
  } = useContext(MyContext);
  return (
    <div
      className="reddit_clone-nav_menu_item"
      style={{ width: "16rem" }}
      onClick={(e) => {
        console.log(e.target);
        const val = arr[parseInt(e.target.id) - 1];
        setNavMenu(val);
      }}
    >
      <p style={{ fontSize: "0.8rem" }}>FEEDS</p>
      <button
        id="1"
        onClick={() => {
          setNewPost(false);
          navigate("/");
          setIsPopularPage(false);
        }}
      >
        {" "}
        <AiFillHome className="reddit_clone-nav_menu_icons" /> Home
      </button>
      <button
        id="2"
        onClick={() => {
          navigate("/popular");
          setIsAllPage(false);
          setIsPopularPage(true);
        }}
      >
        <BsArrowUpRightCircle className="reddit_clone-nav_menu_icons" /> Popular
      </button>
      <button
        id="3"
        onClick={() => {
          setIsAllPage(true);
          setRedditIndex((p) => p + 1);

          navigate("/popular");
        }}
      >
        <BsFileBarGraph className="reddit_clone-nav_menu_icons" /> All
      </button>
      <p style={{ fontSize: "0.8rem" }}>OTHER</p>
      <button id="4" onClick={() => navigate("/comingpage")}>
        <RiUserSettingsLine className="reddit_clone-nav_menu_icons" /> User
        Setting
      </button>
      <button
        id="5"
        onClick={() => {
          navigate("/messages");
        }}
      >
        <AiOutlineMessage className="reddit_clone-nav_menu_icons" /> Message
      </button>
      <button
        id="6"
        onClick={() => {
          setNewPost(true);
          navigate("/");
        }}
      >
        <AiOutlinePlus className="reddit_clone-nav_menu_icons" /> Create Post
      </button>
      <button id="7" onClick={() => navigate("/notification")}>
        <IoIosNotificationsOutline className="reddit_clone-nav_menu_icons" />{" "}
        Notifications
      </button>
      <button id="8" onClick={() => navigate("/coins")}>
        <CiCoinInsert className="reddit_clone-nav_menu_icons" /> Coins
      </button>
      <button id="9" onClick={() => navigate("/premium")}>
        <BsShield className="reddit_clone-nav_menu_icons" /> Premium
      </button>
      <button id="10" onClick={() => navigate("/comingpage")}>
        <IoShirtOutline className="reddit_clone-nav_menu_icons" /> Avatar
      </button>
    </div>
  );
};

export default NavMenu;
