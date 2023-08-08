import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Post from "../Post/Post";
import "./Allposts.css";
import { initialPosts } from "../initialPosts";
import { useLocation } from "react-router-dom";
const count = 10;
const acessKey = "zwTgacSWTV4UweSL2G1cKFPtPMtKQyJG7hBmlYtNKBo";
export const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${acessKey}&count=${count}`;
let ready = true;
const AllPosts = () => {
  const [scroll, setScroll] = useState([]);
  const { update, apiPosts, filterPost, pseudoPost, search } =
    useContext(MyContext);
  const location = useLocation();
  useEffect(() => {
    const getMorePosts = async () => {
      try {
        const res = await fetch(`${apiUrl}`);
        const data = await res.json();
        const arr = [];
        console.log(arr, "before loop", scroll, "scroll item");
        data.forEach((item) => {
          arr.push({
            title: item?.alt_description,
            id: item.id,
            image: item?.urls?.regular,
            vote: Math.ceil(Math.random() * 1000),
            textArea: "",
          });
        });
        console.log(arr, "after loop called");
        setScroll((p) => [...p, ...arr]);
      } catch (error) {
        console.log(error);
      }
    };
    const infiniteScroll = () => {
      if (
        window.scrollY + window.innerHeight >= document.body.offsetHeight &&
        ready
      ) {
        getMorePosts();
        ready = false;
        setTimeout(() => {
          ready = true;
        }, 5000);
      }
    };
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      console.log("clean up function");
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  return (
    <div className="reddit_clone-allposts">
      {search || filterPost.length ? (
        <>
          {filterPost.map((post) => (
            <Post
              userName={post?.userName}
              userPhoto={post?.userPhoto}
              key={post.id}
              id={post.id}
              title={post.title}
              vote={post.vote}
              image={post?.image}
              textArea={post?.textArea}
              thumbnail={post?.thumbnail}
              video_url={post?.video_url}
            />
          ))}
        </>
      ) : (
        <>
          {location.pathname == "/" ? (
            <></>
          ) : (
            <div>
              {apiPosts?.map((post) => (
                <Post
                  userName={post?.userName}
                  userPhoto={post?.userPhoto}
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  vote={post.vote}
                  image={post?.image}
                  textArea={post?.textArea}
                  thumbnail={post?.thumbnail}
                  video_url={post?.video_url}
                />
              ))}
            </div>
          )}
          <>
            {update.length > 0 ? (
              <Post
                key={update[0].id}
                userName={update[0]?.userName}
                id={update[0].id}
                title={update[0].title}
                vote={update[0].vote}
                image={update[0]?.image}
                textArea={update[0].textArea}
                userPhoto={update[0]?.userPhoto}
              />
            ) : (
              ""
            )}
            {pseudoPost.map((post) => (
              <Post
                userName={post?.userName}
                userPhoto={post?.userPhoto}
                key={post?.id}
                id={post.id}
                title={post.title}
                vote={post.vote}
                image={post?.image}
                textArea={post?.textArea}
                thumbnail={post?.thumbnail}
                video_url={post?.video_url}
              />
            ))}
          </>
          {update.map((post) => (
            <Post
              key={post.id}
              userName={post?.userName}
              id={post.id}
              title={post.title}
              vote={post.vote}
              image={post?.image}
              textArea={post.textArea}
              userPhoto={post?.userPhoto}
            />
          ))}
          {initialPosts?.map((post) => (
            <Post
              userName={post?.userName}
              userPhoto={post?.userPhoto}
              key={post.id}
              id={post.id}
              title={post.title}
              vote={post.vote}
              image={post?.image}
              textArea={post.textArea}
            />
          ))}
          {scroll.map((post) => (
            <Post
              userName={post?.userName}
              userPhoto={post?.userPhoto}
              key={post.id}
              id={post.id}
              title={post.title}
              vote={post.vote}
              image={post?.image}
              textArea={post.textArea}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default AllPosts;
