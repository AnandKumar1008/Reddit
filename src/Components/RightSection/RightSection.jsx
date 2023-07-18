import React, { useRef, useEffect, useState, useContext } from "react";
import "./Rightsection.css";
// import { GrShield } from "react-icons/gr";
import { BsShield } from "react-icons/bs";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { arr } from "../NavMenuArray";
const RightSectionPremium = () => {
  const navigate = useNavigate();
  const { setNavMenu } = useContext(MyContext);
  return (
    <section className="reddit_clone-right_section_premium">
      <div className="reddit_clone-right_section_premium_heading">
        <BsShield className="reddit_clone-right_section_icon" />
        <div>
          <h4>Reddit Premium</h4>
          <p>The Best Reddit experience, with monthly coins</p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/premium");
          setNavMenu(arr[8]);
        }}
      >
        Try Now
      </button>
    </section>
  );
};
const RightSectionCommunity = () => {
  const navigate = useNavigate();
  const { setNavMenu, setNewPost } = useContext(MyContext);
  return (
    <section className="reddit_clone-right_Secton_community">
      <p>
        Your Personal Reddit frontPage.Come here to check in with your favourite
        communities
      </p>
      <button
        onClick={() => {
          setNavMenu(arr[0]);
          setNewPost(true);
          navigate("/");
        }}
      >
        Create Post
      </button>
      <button>Create Community</button>
    </section>
  );
};
const RightSectionFooter = () => {
  return (
    <footer className="reddit_clone-section_right_footer">
      <div>
        <p href="">user Agreement</p>
        <p href="">Content Policy</p>
        <p href="">Privacy Policy</p>
        <p href="">Modern Code of conduct</p>
      </div>
      <hr />
      <div>
        <p href="">English</p>
        <p href="">Deutsch</p>
        <p href="">Francais</p>

        <p href="">Italiano</p>
        <p href="">Espanol</p>
        <p href="">Portuges</p>
      </div>
      <hr />
      <p className="reddit_clone-section_right_footer_p">
        Reddit,Inc &copy 2023 All rights reserved
      </p>
    </footer>
  );
};
const RightSection = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [width, setWidth] = useState();
  const { isPopularPage, setIsPopularPage } = useContext(MyContext);
  // const divRef = useRef();
  // const r=useRef
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 320) {
        const w = document.querySelector(
          ".reddit_clone-right_Secton_community"
        ).offsetWidth;
        setShowDiv(true);
        //  const width=;
        setWidth(w);
      } else {
        setShowDiv(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showDiv && (
        <div
          className="reddit_clone-footer_position"
          style={{ width: `${width}` }}
        >
          {isPopularPage ? false : <RightSectionFooter />}
        </div>
      )}
      <div className="reddit_clone-right_section">
        <RightSectionPremium />
        <RightSectionCommunity />
        {showDiv && !isPopularPage ? false : <RightSectionFooter />}
      </div>
    </>
  );
};

export default RightSection;
