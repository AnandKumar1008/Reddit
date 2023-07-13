import React, { useContext, useEffect, useRef, useState } from "react";
import { FaReddit } from "react-icons/fa";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { BsQrCodeScan } from "react-icons/bs";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";
import { CiCoinInsert } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./Nav.css";
import Login from "../Login/Login";
import { MyContext } from "../../App";
import Signup from "../Signup/Signup";
import CreatePassword from "../Signup/CreatePassword";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";
import { GiAlienSkull } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";
// import {FaRegRectangleList} from 'react-icons/fa'
import { FiFileText } from "react-icons/fi";
import { CiCircleMore } from "react-icons/ci";
import { BsQuestionLg } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import NavMenu from "../NavMenu/NavMenu.jsx";
import { BsArrowBarLeft } from "react-icons/bs";
import SimpleListMenu from "../SimpleListMenu";
const style = {
  border: "1px solid var(--color-border)",
  borderRadius: " 3px",
  cursor: "pointer",
};
const Option = () => {
  const { login, setLogin, setShowForm, theme, setTheme } =
    useContext(MyContext);

  const handleLogin = () => {
    if (!login) {
      setShowForm("Login");
      // setLogin(false);
      return;
    }
    setLogin(false);

    // const arr = [];
    const obj = {};
    // localStorage.setItem("reddit_clone", JSON.stringify(arr));
    // localStorage.setItem('current_user',)
    localStorage.removeItem("current_user");
    localStorage.setItem("reddit_google", JSON.stringify(obj));
  };
  const handleTheme = () => {
    console.log(theme);
    setTheme((p) => (p == "light-theme" ? "dark-theme" : "light-theme"));
  };
  return (
    <div className="reddit_clone-nav_option">
      <button>
        <BsQuestionLg /> Help Center
      </button>
      <button>
        <CiCircleMore /> More
      </button>
      <button>
        <FiFileText /> Terms And Policies
      </button>
      <button>
        <FcAdvertising /> Advertise on Reddit
      </button>
      <button onClick={handleLogin}>
        <CgLogIn /> LogIn & LogOut
      </button>
      {/* <button onClick={handleTheme}>
        {theme === "light-theme" ? <MdDarkMode /> : <MdLightMode />} Theme
      </button> */}
    </div>
  );
};
const NavIcon = ({ userName, option, setOption }) => {
  // console.log(userName);
  // const {userName}=props;
  const navigate = useNavigate();
  const optionRef = useRef();
  const { isAllPage, setISAllPage } = useContext(MyContext);

  const { userPhoto, setNewPost } = useContext(MyContext);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (optionRef.current && !optionRef.current.contains(e.target)) {
        setOption(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleOptions = () => {
    setOption((p) => !p);
  };
  return (
    <div className="reddit_clone-nav_icons">
      <div className="reddit_clone-nav_icons_item">
        <button onClick={() => navigate("/messages")}>
          <AiOutlineMessage />
        </button>
        <button
          onClick={() => {
            navigate("/");
            setNewPost(true);
          }}
        >
          <AiOutlinePlus />{" "}
        </button>
        <button onClick={() => navigate("/notification")}>
          <IoIosNotificationsOutline />
        </button>

        <button onClick={() => navigate("/comingpage")}>
          <FcAdvertising /> Advertise
        </button>
      </div>
      <div
        className="reddit_clone-nav_username"
        onClick={handleOptions}
        ref={optionRef}
      >
        <div className="reddit_clone-nav_username_item">
          <div className="reddit_clone-nav_username_userphoto">
            {userPhoto ? (
              <img
                src={userPhoto}
                alt=""
                style={{
                  maxWidth: "2rem",
                  maxHeight: "2rem",
                }}
              />
            ) : (
              <GiAlienSkull />
            )}
          </div>
          <div className="reddit_clone-nav_username_user">
            {" "}
            <p>{userName ? userName : ""}</p>
            <p>*1 karma</p>
          </div>
        </div>
        <BsChevronDown />
        {option && <Option />}
      </div>
    </div>
  );
};

const Nav = () => {
  const [option, setOption] = useState(false);
  const navigate = useNavigate();
  const [navMenuWidth, setNavMenuWidth] = useState();
  const [showMenu, setShowMenu] = useState(false);
  // const navigate = useNavigate();
  const [hover, setHover] = useState(true);
  const [windowWidth, setWindowWidth] = useState(true);
  const [border, setBorder] = useState();
  const {
    login,
    setLogin,
    showForm,
    setShowForm,
    theme,
    setTheme,
    userName,
    userPhoto,
    setIsAllPage,
    isAllPage,
    menu,
    setMenu,
    navMenu,
    setNavMenu,
    setNewPost,
  } = useContext(MyContext);
  useEffect(() => {
    const w = document.querySelector(".reddit_clone-nav_menu_btn").offsetWidth;
    setNavMenuWidth(w);
    const handleResize = () => {
      // if (window.innerWidth < 1200) {
      // }
      console.log(window.innerWidth);
      setMenu(parseFloat(window.innerWidth) > 1200);
      setWindowWidth(parseFloat(window.innerWidth) > 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleHover = () => {
    setHover(!hover);
  };
  const handleMouseIn = () => {
    if (!menu) {
      setBorder(style);
    }
  };
  const handleLeave = () => {
    if (border) {
      setBorder();
    }
  };
  const handleClick = () => {
    // setLogin(true);
    setShowForm("Login");
    // setOverlay("background-overlay");
  };
  return (
    <div className="reddit_clone-nav_fixed">
      <div className="reddit_clone-nav">
        <div className="reddit_clone-nav_icon">
          <div
            className="reddit_clone-nav_reddit_name"
            onClick={() => {
              navigate("/");
              // setShowForm("none");
              setNewPost(false);
            }}
          >
            <FaReddit className="reddit_clone-nav_reddit_icon" />

            <p>reddit</p>
          </div>
          <div className="reddit_clone-nav_menu">
            <button
              className="reddit_clone-nav_menu_btn"
              onClick={() => {
                menu === false ? setShowMenu((p) => !p) : "";
              }}
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleLeave}
              style={border}
            >
              {navMenu ? navMenu : false}{" "}
              <div>
                {menu === false && showMenu && windowWidth && (
                  <BsArrowBarLeft onClick={() => setMenu(true)} />
                )}
                <BsChevronDown />{" "}
              </div>
            </button>
            {showMenu && (
              <div>{menu ? false : <NavMenu width={navMenuWidth} />}</div>
            )}
          </div>
        </div>
        <div className="reddit_clone-nav_input">
          <div className="reddit_clone-nav_input_item">
            <input type="text" placeholder="🔍 Search Reddit" />
          </div>
          {login && (
            <div className="react_clone-mid_icons">
              <button
                onClick={() => {
                  navigate("/popular");
                  setIsAllPage(false);
                }}
              >
                <BsArrowUpRightCircle />{" "}
              </button>
              <button onClick={() => navigate("/coins")}>
                <CiCoinInsert />{" "}
              </button>
            </div>
          )}
        </div>
        {/* <hr /> */}
        {login ? (
          <NavIcon userName={userName} option={option} setOption={setOption} />
        ) : (
          <div className="reddit_clone-nav_login_part">
            <button className="reddit_clone-nav_getapp">
              {" "}
              <BsQrCodeScan /> Get App
            </button>
            <button className="reddit_clone-nav_login" onClick={handleClick}>
              <BiLogIn /> Login
            </button>
            <div
              className="reddit_Clone-nav_before_login"
              onClick={() => setOption((p) => !p)}
            >
              <RiContactsLine className="reddit_clone-contact_icon" />
              <BsChevronDown />
              {option && <Option />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
