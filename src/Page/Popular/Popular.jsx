import React, { useContext, useEffect } from "react";
import Allposts from "../../Components/AllPosts/AllPosts";
import Nav from "../../Components/Nav/Nav";
// import AllPosts from "../../Components/AllPosts/AllPosts";
import "./Popular.css";
// export const MyContext = createContext();
import { MyContext } from "../../App";
import img3 from "../../Components/Image/coins.jpg";
import img2 from "../../Components/Image/customapp.jpg";
import {
  default as img1,
  default as img4,
} from "../../Components/Image/lounge.jpg";
import Menu from "../../Components/Menu/Menu";
import RightSection from "../../Components/RightSection/RightSection";
import Stick from "./Stick";

const subreddit = "all";
// const rand = "https://www.reddit.com/r/random/.json?limit=30";
// const randomUrl =  "https://www.reddit.com/r/" + subreddit + "/random.json?limit=30";
const over_lay = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  pointerEvents: "none",
};
const Popular = () => {
  const {
    setUpdate,
    showForm,

    setLoading,
    isAllPage,
    menu,
    subReddit,
    redditIndex,
    setApiPosts,
  } = useContext(MyContext);

  useEffect(() => {
    const fireBaseApi = async () => {
      const response = await fetch(
        "https://redditclone-59718-default-rtdb.firebaseio.com/database.json"
      );
      const data = await response.json();
      console.log(data);
      setUpdate(Object.values(data || {}).reverse());
    };
    const redditApi = async () => {
      // const url = "https://www.reddit.com/r/all/top.json?limit=30";
      const response = await fetch(
        `https://www.reddit.com/r/${subReddit[redditIndex % 10]}.json`
      );

      const data = await response.json();
      // console.log(data);
      // console.log(data?.data?.children);
      const arr = data?.data?.children;
      const posts = [];
      arr?.forEach((e, i) => {
        posts.push({
          userPhoto: e.data?.photo,
          userName: e.data?.author,
          key: e.data?.id,
          id: e.data?.id,
          title: e.data?.title,
          image: e.data?.url,
          vote: e.data?.ups,
          textArea: e.data?.textArea,
          thumbnail: e.data?.thumbnail,
          video_url: e.data?.media?.reddit_video?.fallback_url,
        });
      });
      setApiPosts(posts);
    };
    redditApi();
  }, [redditIndex]);

  return (
    <div
      className="reddit_clone-app"
      style={showForm == "none" ? {} : over_lay}
    >
      <div className="reddit_clone-app_total_posts">
        {menu && (
          <div className="reddit_clone-popular_pseudo">
            <Menu />
          </div>
        )}

        <div className="reddit_clone-popular_section">
          {isAllPage ? (
            false
          ) : (
            <div className="reddit_clone-popular_img">
              <div className="reddit_clone-popular_image_item">
                <img src={img1} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div>
              <div className="reddit_clone-popular_image_item">
                <img src={img2} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div>
              <div className="reddit_clone-popular_image_item">
                <img src={img3} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div>
              <div className="reddit_clone-popular_image_item">
                <img src={img4} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div>
            </div>
          )}
          {isAllPage ? (
            false
          ) : (
            <p className="reddit_clone-popular_post">Popular Post</p>
          )}
          <div
            className="reddit_clone-popular_section_comp"
            style={isAllPage ? { margin: "4rem 0" } : {}}
          >
            <div className="reddit_clone-popular_add_post">
              <Stick />
              <Allposts />
            </div>

            <div className="reddit_clone-popular_right_section">
              <RightSection />
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Popular;
