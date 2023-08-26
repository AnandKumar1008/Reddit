import React, { useContext } from "react";
import "./Comingpage.css";
import Nav from "../../Components/Nav/Nav";
import Menu from "../../Components/Menu/Menu";
// import { MyContext } from "../../App";
import coming from "../../Components/Image/c.webp";
import { MyContext } from "../../MyContext";
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
      <img src={coming} alt="" />
      <Nav />
    </div>
  );
};

export default Comingpage;
