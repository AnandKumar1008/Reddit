import React, { useRef, useEffect, useState, useContext } from "react";
import "./Rightsection.css";
// import { GrShield } from "react-icons/gr";
import { BsShield } from "react-icons/bs";
import { MyContext } from "../../App";
const RightSectionPremium = () => {
  return (
    <section className="reddit_clone-right_section_premium">
      <div className="reddit_clone-right_section_premium_heading">
        <BsShield className="reddit_clone-right_section_icon" />
        <div>
          <h4>Reddit Premium</h4>
          <p>The Best Reddit experience, with monthly coins</p>
        </div>
      </div>
      <button>Try Now</button>
    </section>
  );
};
const RightSectionCommunity = () => {
  return (
    <section className="reddit_clone-right_Secton_community">
      <p>
        Your Personal Reddit frontPage.Come here to check in with your favourite
        communities
      </p>
      <button>Create Post</button>
      <button>Create Community</button>
    </section>
  );
};
const RightSectionFooter = () => {
  return (
    <footer className="reddit_clone-section_right_footer">
      <div>
        <a href="">user Agreement</a>
        <a href="">Content Policy</a>
        <a href="">Privacy Policy</a>
        <a href="">Modern Code of conduct</a>
      </div>
      <hr />
      <div>
        <a href="">English</a>
        <a href="">Deutsch</a>
        <a href="">Francais</a>

        <a href="">Italiano</a>
        <a href="">Espanol</a>
        <a href="">Portuges</a>
      </div>
      <hr />
      <p>Reddit,Inc &copy 2023 All rights reserved</p>
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
