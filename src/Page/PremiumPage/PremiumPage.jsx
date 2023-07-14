import React, { useContext } from "react";
import Premium from "../../Components/Premium/Premium";
import Nav from "../../Components/Nav/Nav";
import { MyContext } from "../../App";

const PremiumPage = () => {
  const { over_lay, showForm } = useContext(MyContext);
  return (
    <div style={showForm == "none" ? {} : over_lay}>
      <Premium />
      <Nav />
    </div>
  );
};

export default PremiumPage;
