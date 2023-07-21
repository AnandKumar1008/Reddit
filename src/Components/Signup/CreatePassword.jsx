import React, { useContext, useState } from "react";
import "./CreatePassword.css";
import { BiArrowBack } from "react-icons/bi";
import { MyContext } from "../../App";
const CreatePassword = () => {
  const { setShowForm, setLogin, setUserName } = useContext(MyContext);
  const [inp, setInp] = useState({
    username: "",
    create_password: "",
  });
  const [error, setError] = useState({
    usernameError: "",
    createpasswordError: "",
  });
  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inp.username.length <= 3 || inp.username.length > 20) {
      setError({
        ...error,
        usernameError: "username must have characters between and 4 to 20",
      });
      e.preventDefault();
      return;
    }
    if (inp.create_password.length <= 6) {
      e.preventDefault();
      setError({
        ...error,
        createpasswordError: "password must have more than 6 characters",
      });
      return;
    }
    const reddit = JSON.parse(localStorage.getItem("reddit_clone")) || [];
    //    const store=[]
    // const data = JSON.parse(reddit);
    if (reddit.length == 0) {
      reddit.push({ username: inp.username, password: inp.create_password });
      localStorage.setItem("reddit_clone", JSON.stringify(reddit));
    } else {
      // if (reddit.includes(inp.username)) {
      //   setError({ ...error, usernameError: "UserName Already taken" });
      //   return;
      // }
      let val = "";
      reddit.forEach((e, i) => {
        if (e.username === inp.username) {
          // console.log("first hhere");
          val = inp.username;
          setError({ ...error, usernameError: "UserName Already taken" });
          return;
        }
      });
      if (val) return;
      reddit.push({ username: inp.username, password: inp.create_password });
      localStorage.setItem("reddit_clone", JSON.stringify(reddit));
    }
    // setLogin(true);
    setUserName(inp.username);
    setShowForm("Login");
  };
  return (
    <div className="reddit_clone-create_password">
      <div className="reddit_clone-create_password_close">
        <button onClick={() => setShowForm("Signup")}>
          <BiArrowBack />
        </button>
        <button onClick={() => setShowForm("none")}>X</button>
      </div>
      <div className="reddit_clone-create_password_container">
        <div className="reddit_clone-create_password_heading">
          <h3>Create your username and password</h3>
          <p>
            Reddit is anonymous, so your username is what you’ll go by here.
            Choose wisely—because once you get a name, you can’t change it.
          </p>
        </div>

        <hr />
        <form
          className="reddit_clone-create_password_input"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={inp.username}
            onChange={handleChange}
            required
          />
          {error.usernameError && (
            <p style={{ color: "red" }}>{error.usernameError}</p>
          )}
          <input
            type="password"
            placeholder="Create Password"
            name="create_password"
            required
            onChange={handleChange}
            value={inp.create_password}
          />
          {error.createpasswordError && (
            <p style={{ color: "red" }}>{error.createpasswordError}</p>
          )}
          <button>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
