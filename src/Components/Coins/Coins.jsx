import React, { useContext } from "react";
import { Footer } from "../../Components/Premium/Premium";
import redditcoin from "../../Components/Image/Redditcoin.png";
import "./Coins.css";
import silver from "../../Components/Image/silver.jpg";
import gold from "../../Components/Image/gold.jpg";
import platinum from "../../Components/Image/platinum.jpg";
import coinbag from "../../Components/Image/coinbag.jpg";
import coinbag2 from "../../Components/Image/coinbag2.jpg";
import coinbag3 from "../../Components/Image/coinbag3.jpg";
import coinbag4 from "../../Components/Image/coinbag4.jpg";
import coinbag5 from "../../Components/Image/coinbag5.jpg";
import coinbag6 from "../../Components/Image/coinbag6.png";
import coinbag7 from "../../Components/Image/coinbag7.jpg";
// import { Accordion } from "@mui/material";
import Accordion from "../../Components/Accordian/Accordian";
import Nav from "../../Components/Nav/Nav";
import Menu from "../Menu/Menu";
import { MyContext } from "../../App";
const coins = [
  coinbag2,
  coinbag,
  coinbag3,
  coinbag3,
  coinbag4,
  coinbag5,
  coinbag6,
  coinbag7,
];
const CoinsItem = ({ image }) => {
  // console.log(props);
  return (
    <div className="reddit_clone-coins_item">
      <div className="reddit_clone-coins_item_img">
        <img src={image} alt="" />
      </div>
      <div className="reddit_clone-coins_item_text">
        <h1>
          {" "}
          <span>©</span>
          {Math.ceil(Math.random() * 10) * 10} Coins
        </h1>
        <p>
          Give {Math.ceil(Math.random() * 10)} Gold or{" "}
          {Math.ceil(Math.random() * 10)} Silver Awards
        </p>
      </div>
      <div className="reddit_clone-coins_item_button">
        {" "}
        <button>${Math.ceil(Math.random() * 1000) / 100}</button>
      </div>
    </div>
  );
};
const Coins = () => {
  const { menu } = useContext(MyContext);
  return (
    <div className="reddit_clone-coinspage-container">
      {menu && (
        <div className="reddit_clone-pseudo_element_coin">
          <Menu />
        </div>
      )}
      <div
        className="reddit_clone-coinspage"
        style={menu ? { width: "82%" } : { width: "100%" }}
      >
        <img src={redditcoin} alt="" />
        <section className="reddit_clone-coinspage_heading">
          <h2>Here’s what you can buy with coins</h2>
          <h4>
            Spend your coins on these Awards reserved exclusively for the finest
            Reddit contributors. Awarding a post or comment highlights it for
            all to see, and some Awards also grant the honoree special bonuses.
          </h4>
        </section>
        <section className="reddit_clone-awards">
          <div className="reddit_clone-awards_item">
            <img src={silver} alt="" />
            <h3>Silver Award</h3>
            <p>
              Shows a Silver Award on the post or comment and ... that’s it.
              You’ll need 100 Coins.
            </p>
          </div>
          <div className="reddit_clone-awards_item">
            <img src={gold} alt="" />
            <h3>Gold Award</h3>
            <p>
              Gives 100 Reddit Coins and a week of r/lounge access and ad-free
              browsing. You’ll need 500 coins.
            </p>
          </div>
          <div className="reddit_clone-awards_item">
            <img src={platinum} alt="" />
            <h3>Platinum Award</h3>
            <p>
              Gives a month of r/lounge access and ad-free browsing, and 700
              Reddit Coins for that month. You’ll need 1800 coins.
            </p>
          </div>
        </section>
        <section className="reddit_clone-coins_section">
          <h1>Reddit Coins</h1>
          <div className="reddit_clone-coins_section_item">
            {coins.map((image, i) => (
              <CoinsItem key={i} image={image} />
            ))}
          </div>
        </section>
        <div className="reddit_clone-coins_questions">
          <Accordion />
        </div>
        <Footer />
        <Nav />
      </div>
    </div>
  );
};

export default Coins;
