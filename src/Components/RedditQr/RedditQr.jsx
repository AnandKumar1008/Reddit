import React, { useContext } from "react";
import "./RedditQr.css";
import qr from "../Image/redditqr.jpg";
import { MyContext } from "../../MyContext";
const RedditQr = () => {
  const { setQr } = useContext(MyContext);
  return (
    <div className="reddit_clone-redditQr">
      <div className="reddit_clone-redditQr_container">
        <div className="reddit_clone-RedditQr_get_app">
          <h1>Get the Reddit app </h1>
          <button onClick={() => setQr(false)}>X</button>
        </div>
        <div className="reddit_clone-RedditQr_scan">
          <p>Scan this QR code to download the app now</p>
          <img src={qr} alt="" />
        </div>
        <div className="reddit_clone-RedditQr_footer">
          <p>Or Check it out in App Store</p>
          <div className="reddit_clone-RedditQr_button">
            <button>GooglePlay </button>
            <button>App store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditQr;
