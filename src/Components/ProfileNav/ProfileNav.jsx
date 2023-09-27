import React from "react";
import "./ProfileNav.css";
const ProfileNav = () => {
  return (
    <div className="reddit_clone-profile_nav">
      <ul>
        <li>Overview</li>
        <li>Posts</li>
        <li>Comments</li>
        <li>History</li>
        <li>Saved</li>
        <li>Hidden</li>
        <li>UpVoted</li>
        <li>Downvoted</li>
      </ul>
    </div>
  );
};

export default ProfileNav;
