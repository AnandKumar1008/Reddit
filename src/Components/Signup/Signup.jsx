import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./Signup.css";
import { MyContext } from "../../MyContext";
// import { MyContext } from "../../App";
const Signup = () => {
  const { setShowForm } = useContext(MyContext);
  const handleSubmit = () => {
    setShowForm("create_password");
  };
  return (
    <div className="reddit_clone-signup">
      <div className="reddit_clone-signup_close">
        <button onClick={() => setShowForm("none")}>X</button>
      </div>
      <div className="reddit_clone-signup_container">
        <div className="reddit_clone-signup_heading">
          <h3>Sign Up</h3>
          <p>
            By continuing, you are setting up a Reddit account and agree to our{" "}
            <a href=""> User Agreement </a>
            and <a href=""> Privacy Policy.</a>
          </p>
        </div>
        <div className="reddit_clone-signup_shortcut">
          <button>
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
        <form className="reddit_clone-signup_input" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <p>
            Forgot your <a href="">username</a> of <a href="">password </a> ?
          </p>
          <button style={{ letterSpacing: "1px" }}>Continue</button>
        </form>
        <p>
          Already a Redditor?{" "}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setShowForm("Login");
            }}
          >
            Login
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
