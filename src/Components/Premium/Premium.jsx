import React, { useContext } from "react";
import "./Premium.css";
import img from "../Image/img.png";
import { RiAdvertisementFill } from "react-icons/ri";
import { LuSofa } from "react-icons/lu";
import { GrAppsRounded } from "react-icons/gr";
// import {LiaCoinsSolid} from 'react-icons/l'
import avatar from "../Image/avatar.jpg";
import lounge from "../Image/lounge.jpg";
import coin from "../Image/coins.jpg";
import app from "../Image/customapp.jpg";
import premAvatar from "../Image/premiumavatar.png";
import Menu from "../Menu/Menu";
import { MyContext } from "../../App";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
const Premium = () => {
  const { menu } = useContext(MyContext);
  return (
    <div className="reddit_clone-premium_container">
      {menu && (
        <div className="reddit_clone-pseudo_element">
          <Menu />
        </div>
      )}
      <div
        className="reddit_clone-premium"
        style={{ width: menu ? "82%" : "100%" }}
      >
        <img src={img} alt="" />
        <div className="reddit_premium_heading">
          <h1>Join Reddit Premium Today</h1>
        </div>
        <div className="reddit_clone-premium_grid">
          <div className="reddit_clone-premium_grid_item">
            <RiAdvertisementFill className="reddit_clone-premium_icons" />

            <h4>Ad-free Browsing</h4>
            <p>Enjoy redditing without interruptions from ads</p>
          </div>
          <div className="reddit_clone-premium_grid_item">
            <img src={avatar} alt="" />
            <h4>Exclusive Avatar Gear</h4>
            <p>Outfit your avatar with the best gear and accessories</p>
          </div>
          <div className="reddit_clone-premium_grid_item">
            <img src={lounge} alt="" />
            <h4>Member lounge</h4>
            <p>Discover all the illuminati secrets in r/lounge</p>
          </div>
          <div className="reddit_clone-premium_grid_item">
            <img src={app} alt="" />
            <h4>Custom App Icons*</h4>
            <p>Change your app icon to something more your style</p>
          </div>{" "}
          <div
            className="reddit_clone-premium_grid_item"
            style={{ backgroundColor: "var(--color-background)" }}
          ></div>
          <div className="reddit_clone-premium_grid_item">
            <img src={coin} alt="" />
            <h4>700 Monthly Coins</h4>
            <p>Get 700 coins a month and make it rain awards</p>
          </div>
          <div className="reddit_clone-premium_grid_item">
            <img src={premAvatar} alt="" />
            <h4>Premium Awards</h4>
            <p>Give exclusive awards that get more attention</p>
          </div>{" "}
          <div
            className="reddit_clone-premium_grid_item"
            style={{ backgroundColor: "var(--color-background)" }}
          ></div>
        </div>
        <div className="reddit_clone-premium_button">
          <button className="reddit_clone-premium_button_b1">
            {" "}
            <span>${Math.ceil(Math.random() * 1000) / 100}/Month</span>
          </button>
          <button className="reddit_clone-premium_button_b2">
            ${Math.ceil(Math.random() * 1000) / 100}/Year <span> Save 30%</span>{" "}
          </button>
        </div>
        <div className="reddit_clone-premium_text">
          <p>Subscriptions automatically renew</p>
          <p>
            * Custom app icons and welcome gifts are only available through a
            paid Reddit Premium subscription.
          </p>
          <button>Visit the Reddit Premium FAQs</button>
        </div>
        <Footer />
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="reddit_clone-premium_footer">
      <div className="reddit_clone-premium_footer_container">
        <div className="reddit_clone-premium_footer_items">
          <p>About</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div className="reddit_clone-premium_footer_items">
          <p>Advertise</p>
          <p>Blog</p>
          <p>Help</p>
        </div>
        <div className="reddit_clone-premium_footer_items">
          <p>Reddit Premium</p>
        </div>
      </div>
      <div className="reddit_clone-premium_footer_icons">
        <div className="reddit_clone-premium_footer_icon_div">
          <span className="reddit_clone-facebook_icon ">
            <BsFacebook />
          </span>
          <span className="reddit_clone-twitter_icon ">
            <AiFillTwitterCircle />
          </span>
          <span className="reddit_clone-instagram_icon ">
            <BiLogoInstagramAlt />
          </span>
          <span className="reddit_clone-whats_app">
            <BsWhatsapp />
          </span>
        </div>
      </div>
      <div className="reddit_clone-premium_copyright">
        <p>Content Policy</p>
        <p>Privacy Policy</p>
        <p>User Agreement</p>
        <p>Mod Policy</p>
        <p>Reddit, Inc. © 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};
export { Footer };
export default Premium;
