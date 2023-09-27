import React, { useContext } from "react";
import Nav from "../../Components/Nav/Nav";
import Menu from "../../Components/Menu/Menu";
import Profile from "../../Components/Profile/Profile";
import { MyContext } from "../../MyContext";
import "./ProfilePage.css";
import RightSection from "../../Components/RightSection/RightSection";
import ProfileNav from "../../Components/ProfileNav/ProfileNav";
const ProfilePage = () => {
  const { over_lay, showForm, menu } = useContext(MyContext);

  return (
    <div
      style={showForm == "none" ? {} : over_lay}
      className="reddit_clone-profile_page"
    >
      <ProfileNav />
      {/* <div className="reddit_clone-profile_page_container">
        {menu && (
          <div className="reddit_clone-profile_page_menu">
            <Menu />
          </div>
        )}
        <div className="reddit_clone-profile_page_cover">
          <Profile />
        </div>
      </div>

      <div className="reddit_clone-profile_page_right">
        <RightSection />
      </div> */}
    </div>
  );
};

export default ProfilePage;
