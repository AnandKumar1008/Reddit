import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../MyContext";
import { auth, provider } from "../../firebase";
import "./Login.css";
import { BASE_URL } from "../../BASE_URL";

const Login = () => {
  const {
    setShowForm,
    setLogin,
    setUserName,
    setUserPhoto,
    setUserId,
    message,
    setMessage,
  } = useContext(MyContext);
  const [inp, setInp] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    if (error != "") {
      setError("");
    }
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, {
        email: inp.email,
        password: inp.password,
      });
      const user = res.data;

      setLogin(true);
      setShowForm("none");
      setUserName(user.data.userName);
      setUserPhoto(user.data.userPhoto);
      setUserId(user.data._id);
      localStorage.setItem("reddit_token", JSON.stringify(user.token));
    } catch (error) {
      console.log(error);
    }

    setError("invalid username or password");
  };
  const backend = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/fireBase`, data);
      const user = res.data;

      setUserId(user.data._id);
      localStorage.setItem("reddit_token", JSON.stringify(user.token));
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserName(result.user.displayName);
        const userName = result.user.displayName;
        const userPhoto = result.user.photoURL;
        const email = result.user.email;

        backend({ email, userPhoto, userName });
        setLogin(true);
        setShowForm("none");
        setUserPhoto(result.user.photoURL);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  useEffect(() => {
    return () => {
      setMessage("");
    };
  }, []);
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
        <p style={{ color: "green" }}>{message}</p>
        <form className="reddit_clone-login_input" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            name="email"
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
