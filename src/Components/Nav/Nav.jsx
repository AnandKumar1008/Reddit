import React, { useContext, useEffect, useRef, useState } from "react";
import { FaReddit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown, BsQrCodeScan } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";
import { CiCoinInsert } from "react-icons/ci";
import { FcAdvertising } from "react-icons/fc";
import { GiAlienSkull } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { MyContext } from "../../App";
import "./Nav.css";
import { AiOutlineMessage } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import {
  BsArrowBarLeft,
  BsArrowUpRightCircle,
  BsQuestionLg,
  BsShield,
} from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu.jsx";
import { arr } from "../NavMenuArray";
const style = {
  border: "1px solid var(--color-border)",
  borderRadius: " 3px",
  cursor: "pointer",
};
const Option = () => {
  const { login, setLogin, setShowForm, theme, setTheme, setNavMenu } =
    useContext(MyContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!login) {
      setShowForm("Login");
      return;
    }
    setLogin(false);
    const obj = {};
    localStorage.removeItem("current_user");
    localStorage.setItem("reddit_google", JSON.stringify(obj));
  };
  const handleTheme = () => {
    console.log(theme);
    setTheme((p) => (p == "light-theme" ? "dark-theme" : "light-theme"));
  };
  return (
    <div className="reddit_clone-nav_option">
      <button onClick={() => navigate("/comingpage")}>
        <BsQuestionLg /> Help Center
      </button>
      <button onClick={() => navigate("/comingpage")}>
        <CiCircleMore /> More
      </button>
      <button onClick={() => navigate("/comingpage")}>
        <FiFileText /> Terms And Policies
      </button>
      <button onClick={() => navigate("/comingpage")}>
        <FcAdvertising /> Advertise on Reddit
      </button>
      <button
        id="8"
        onClick={() => {
          navigate("/coins");
          setNavMenu(arr[7]);
        }}
      >
        <CiCoinInsert className="reddit_clone-nav_menu_icons" /> Coins
      </button>
      <button
        id="9"
        onClick={() => {
          navigate("/premium");
          setNavMenu(arr[8]);
        }}
      >
        <BsShield className="reddit_clone-nav_menu_icons" /> Premium
      </button>
      <button onClick={handleLogin}>
        <CgLogIn /> LogIn & LogOut
      </button>
    </div>
  );
};
const NavIcon = ({ userName, option, setOption }) => {
  const navigate = useNavigate();
  const optionRef = useRef();
  const { setNavMenu } = useContext(MyContext);

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
        <button
          onClick={() => {
            navigate("/messages");
            setNavMenu(arr[4]);
          }}
        >
          <AiOutlineMessage />
        </button>
        <button
          onClick={() => {
            navigate("/");
            setNavMenu(arr[5]);

            setNewPost(true);
          }}
        >
          <AiOutlinePlus />{" "}
        </button>
        <button
          onClick={() => {
            navigate("/notification");
            setNavMenu(arr[6]);
          }}
        >
          <IoIosNotificationsOutline />
        </button>

        <button onClick={() => navigate("/comingpage")}>
          <FcAdvertising /> <p>Advertise</p>
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 1200);
  const [border, setBorder] = useState();
  const {
    login,
    setShowForm,
    theme,
    setTheme,
    userName,
    setIsAllPage,
    menu,
    setMenu,
    navMenu,
    setNavMenu,
    setNewPost,
  } = useContext(MyContext);
  const optionRef = useRef();

  useEffect(() => {
    const w = document.querySelector(".reddit_clone-nav_menu_btn").offsetWidth;
    setNavMenuWidth(w);
    const handleResize = () => {
      setMenu(parseFloat(window.innerWidth) > 1200);
      console.log(window.innerWidth);
      setWindowWidth(parseFloat(window.innerWidth) > 1200);
    };
    window.addEventListener("resize", handleResize);
    const handleClickOutside = (e) => {
      if (optionRef.current && !optionRef.current.contains(e.target)) {
        setOption(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    setShowForm("Login");
  };
  return (
    <div className="reddit_clone-nav_fixed">
      <div className="reddit_clone-nav">
        <div className="reddit_clone-nav_icon">
          <div
            className="reddit_clone-nav_reddit_name"
            onClick={() => {
              navigate("/");
              setNewPost(false);
              setNavMenu(arr[0]);
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
              <div>{menu ? <></> : <NavMenu width={navMenuWidth} />}</div>
            )}
          </div>
        </div>
        <div className="reddit_clone-nav_input">
          <div className="reddit_clone-nav_input_item">
            <input type="text" placeholder="🔍 Search Reddit" />
          </div>
          {login && (
            <div className="reddit_clone-mid_icons">
              <button
                onClick={() => {
                  navigate("/popular");
                  setNavMenu(arr[1]);
                  setIsAllPage(false);
                }}
              >
                <BsArrowUpRightCircle />{" "}
              </button>
              <button
                onClick={() => {
                  navigate("/coins");
                  setNavMenu(arr[7]);
                }}
              >
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
              ref={optionRef}
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
