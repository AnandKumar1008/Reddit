import React, { useContext, useEffect, useState } from "react";
import { BsShield } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { arr } from "../NavMenuArray";
import "./Rightsection.css";
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
        <a href="https://www.redditinc.com/policies/user-agreement">
          user Agreement
        </a>
        <a href="https://www.redditinc.com/policies/content-policy">
          Content Policy
        </a>
        <a href="https://www.reddit.com/policies/privacy-policy">
          Privacy Policy
        </a>
        <a href="https://www.redditinc.com/policies/moderator-code-of-conduct">
          Modern Code of conduct
        </a>
      </div>
      <hr />
      <div>
        <a
          href="https://en.wikipedia.org/wiki/English_Wikipedia"
          rel="noopener noreferrer"
        >
          English
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Deutsch"
          rel="noopener noreferrer"
        >
          Deutsch
        </a>
        <a
          href="https://en.wikipedia.org/wiki/French_language"
          rel="noopener noreferrer"
        >
          Francais
        </a>

        <a
          href="https://en.wikipedia.org/wiki/Italian_language"
          rel="noopener noreferrer"
        >
          Italiano
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Espa%C3%B1ol"
          rel="noopener noreferrer"
        >
          Espanol
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Portuguese_language"
          rel="noopener noreferrer"
        >
          Portuges
        </a>
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

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 320) {
        const w = document.querySelector(
          ".reddit_clone-right_Secton_community"
        ).offsetWidth;
        setShowDiv(true);
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
