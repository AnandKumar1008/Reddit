import React, { useContext, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MyContext } from "../../MyContext";
import "./CreatePassword.css";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
const CreatePassword = () => {
  const { setShowForm, setUserName, email, setMessage } = useContext(MyContext);
  const [inp, setInp] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    usernameError: "",
    createpasswordError: "",
  });
  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
    setError({
      usernameError: "",
      createpasswordError: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inp.username.length <= 3 || inp.username.length > 20) {
      setError({
        ...error,
        usernameError: "username must have characters between and 4 to 20",
      });
      e.preventDefault();
      return;
    }
    if (inp.password.length <= 6) {
      e.preventDefault();
      setError({
        ...error,
        createpasswordError: "password must have more than 6 characters",
      });
      return;
    }

    // make an registeration for the email and username
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/signup`, {
        email,
        password: inp.password,
        userName: inp.username,
      });
      setMessage("Account Creation Successful");

      setShowForm("Login");
    } catch (err) {
      console.log(err);
      setError({ ...error, usernameError: err?.message });
    }
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
            name="password"
            required
            onChange={handleChange}
            value={inp.password}
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
