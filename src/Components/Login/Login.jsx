import React, { useContext, useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
// import { MyContext } from "../../App";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import axios from "axios";
import { MyContext } from "../../MyContext";

const firebaseUrl = "https://redditdata-3dd62-default-rtdb.firebaseio.com/";
const loginDataNode = "loginData.json"; // You can name it however you want

const Login = () => {
  const { setShowForm, setLogin, setUserName, setUserPhoto } =
    useContext(MyContext);
  const [inp, setInp] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    if (error != "") {
      setError("");
    }
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("reddit_clone")) || [];

    data.forEach((element) => {
      if (
        element.username === inp.username &&
        element.password === inp.password
      ) {
        setLogin(true);
        setShowForm("none");
        localStorage.setItem("current_user", JSON.stringify(inp.username));
        setUserName(inp.username);
      }
    });

    setError("invalid username or password");
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserName(result.user.displayName);
        const userName = result.user.displayName;
        const userPhoto = result.user.photoURL;
        const data = {
          userName: userName,
          userPhoto: userPhoto,
        };

        axios
          .post(`${firebaseUrl}${loginDataNode}`, data)
          .then((response) => {
            console.log("Data posted successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error posting data:", error);
          });
        localStorage.setItem(
          "reddit_google",
          JSON.stringify({
            userName,
            userPhoto,
          })
        );
        setLogin(true);
        setShowForm("none");
        setUserPhoto(result.user.photoURL);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div className="reddit_clone-login">
      <div className="reddit_clone-login_close">
        <button onClick={() => setShowForm("none")}>X</button>
      </div>
      <div className="reddit_clone-login_container">
        <div className="reddit_clone-login_heading">
          <h3>Log In</h3>
          <p>
            By continuing, you are setting up a Reddit account and agree to our{" "}
            <a href=""> User Agreement </a>
            and <a href=""> Privacy Policy.</a>
          </p>
        </div>
        <div className="reddit_clone-login_shortcut">
          <button onClick={handleGoogle}>
            <FcGoogle style={{ fontSize: "1rem", marginRight: "2rem" }} />{" "}
            Continue with Google
          </button>
          <button>
            {" "}
            <FaApple style={{ fontSize: "1rem", marginRight: "2rem" }} />{" "}
            Continue with Apple
          </button>
        </div>
        <hr />
        <form className="reddit_clone-login_input" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
            required
            value={inp.username}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
            value={inp.password}
          />
          <p>
            Forgot your <a href="">username</a> of <a href="">password </a> ?
          </p>
          <button>Login</button>
        </form>
        <p>
          New to Reddit?{" "}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setShowForm("Signup");
            }}
          >
            signup
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
