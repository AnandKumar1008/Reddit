import React from "react";
import "./UserSetting";
import { Link } from "react-router-dom";
const UserSetting = () => {
  return (
    <div className="reddit_clone-user_setting">
      <h2>User Setting</h2>
      <nav className="reddit_clone-user_setting">
        <Link>Account</Link>
        <Link>Profile</Link>
        <Link>Safety & Privacy</Link>
        <Link>Feed Setting</Link>
        <Link>Notification</Link>
        <Link>Email</Link>
        <Link>Subscription</Link>
        <Link>Chat & Messages</Link>
      </nav>
    </div>
  );
};

export default UserSetting;
