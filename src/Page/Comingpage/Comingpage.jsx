import React, { useContext } from "react";
import coming from "../../Components/Image/coming.png";
import Menu from "../../Components/Menu/Menu";
import Nav from "../../Components/Nav/Nav";
import { MyContext } from "../../MyContext";
import "./Comingpage.css";
const Comingpage = () => {
  const { showForm, over_lay, menu } = useContext(MyContext);
  return (
    <div
      className="reddit_clone_comimg_page"
      style={showForm == "none" ? {} : over_lay}
    >
      {menu && (
        <div className="reddit_clone-coming_page_pseudo">
          <Menu />
        </div>
      )}
      <div className="reddit_clone-coming_page_image">
        <div className="reddit_clone-coming_page_image_btn">
          {/* <button>Explore</button> */}
        </div>
        <img src={coming} alt="" />
      </div>
      <Nav />
    </div>
  );
};

export default Comingpage;
