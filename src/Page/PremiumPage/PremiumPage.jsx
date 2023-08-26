import React, { useContext } from "react";
import Nav from "../../Components/Nav/Nav";
import Premium from "../../Components/Premium/Premium";
import { MyContext } from "../../MyContext";

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
