import React, { useContext } from "react";
import "./Comingpage.css";
import Nav from "../../Components/Nav/Nav";
import Menu from "../../Components/Menu/Menu";
import { MyContext } from "../../App";
const Comingpage = () => {
  const { showForm, over_lay } = useContext(MyContext);
  return (
    <div
      className="reddit_clone_comimg_page"
      style={showForm == "none" ? {} : over_lay}
    >
      <Menu />
      <p>Stay Tuned</p>
      <p>Page is Under Construction</p>
      <Nav />
    </div>
  );
};

export default Comingpage;
