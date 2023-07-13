import React, { useContext } from "react";
import "./NavMenu.css";
import { MyContext } from "../../App";
import { AiFillHome } from "react-icons/ai";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";
import { BsFileBarGraph } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCoinInsert } from "react-icons/ci";
import { BsShield } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { arr } from "../NavMenuArray";
const darkModeStyle = {
  backgroundColor: "var(--color-lightDark)",
  color: "white",
};

const NavMenu = ({ width }) => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const {
    setNewPost,
    setIsAllPage,
    update,
    setUpdate,
    setIsPopularPage,
    over_lay,
    navMenu,
    setNavMenu,
  } = useContext(MyContext);
  return (
    <div
      className="reddit_clone-nav_menu_item"
      // style={showForm === "none" ? {} : over_lay}
      style={{ width: `${width}px` }}
      onClick={(e) => {
        console.log(e.target);
        const val = arr[parseInt(e.target.id) - 1];
        setNavMenu(val);
      }}
    >
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
          const arr = update;
          setUpdate([...arr.reverse()]);
          setIsAllPage(true);
          navigate("/popular");
        }}
      >
        <BsFileBarGraph className="reddit_clone-nav_menu_icons" /> All
      </button>
      <p>OTHER</p>
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
