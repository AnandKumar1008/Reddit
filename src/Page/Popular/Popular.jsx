import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Allposts from "../../Components/AllPosts/AllPosts";
import Menu from "../../Components/Menu/Menu";
import Nav from "../../Components/Nav/Nav";
import RightSection from "../../Components/RightSection/RightSection";
import { MyContext } from "../../MyContext";
import "./Popular.css";
import Stick from "./Stick";
const count = 4;
const acessKey = "zwTgacSWTV4UweSL2G1cKFPtPMtKQyJG7hBmlYtNKBo";
export const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${acessKey}&count=${count}`;
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
    showForm,
    login,
    allComment,
    setShowForm,
    setPostItem,
    setId,
    setPath,
    isAllPage,
    menu,
    subReddit,
    redditIndex,
    setApiPosts,
  } = useContext(MyContext);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
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
    } catch (error) {
      console.log(error);
    }

    try {
      const showImages = async () => {
        const res = await fetch(`${apiUrl}`);
        const data = await res.json();
        const arr = [];
        data.forEach((item, i) => {
          arr.push({
            title: item?.alt_description,
            id: item.id,
            image: item?.urls?.regular,
            vote: Math.ceil(Math.random() * 100),
            textArea: "",
          });
        });
        setImages(arr);
        console.log(data);
      };
      showImages();
    } catch (error) {
      console.log(error);
    }
  }, [redditIndex]);
  const handleImageClick = (index) => {
    const props = images[index];
    console.log(props);
    if (!login) {
      setShowForm("Login");
      return;
    }
    setPostItem({
      props,
    });
    setId(props?.id);
    if (!allComment[props?.id]) allComment[props?.id] = [];
    setPath(location.pathname);
    navigate("/comment");
  };

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
              {images.map((item, i) => (
                <div
                  key={item.id}
                  id={i}
                  className="reddit_clone-popular_image_item"
                  onClick={() => handleImageClick(i)}
                >
                  <img src={item.image} alt="" />
                  <div className="reddit_clone-popular_image_text">
                    <h4>Heading</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
              {/* <div className="reddit_clone-popular_image_item">
                <img src={img1} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div> */}
              {/* <div className="reddit_clone-popular_image_item">
                <img src={img2} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div> */}
              {/* <div className="reddit_clone-popular_image_item">
                <img src={img3} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div> */}
              {/* <div className="reddit_clone-popular_image_item">
                <img src={img4} alt="" />
                <div className="reddit_clone-popular_image_text">
                  <h4>Heading</h4>
                  <p>
                    Perform your prescribed duty, for doing so is better than
                    not working
                  </p>
                </div>
              </div> */}
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
