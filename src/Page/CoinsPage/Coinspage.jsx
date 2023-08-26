import React, { useContext } from "react";
import Coins from "../../Components/Coins/Coins";
import Nav from "../../Components/Nav/Nav";
import { MyContext } from "../../MyContext";
// import { MyContext } from "../../App";

const Coinspage = () => {
  const { showForm, over_lay } = useContext(MyContext);
  return (
    <div style={showForm == "none" ? {} : over_lay}>
      <Coins />
      <Nav />
    </div>
  );
};

export default Coinspage;
