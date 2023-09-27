import React, { useState, useContext, useEffect } from "react";
import Post from "../Post/Post";
import "./Allposts.css";
import { initialPosts } from "../initialPosts";
import { useLocation } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { BASE_URL } from "../../BASE_URL";
const count = 10;
const acessKey = "zwTgacSWTV4UweSL2G1cKFPtPMtKQyJG7hBmlYtNKBo";
export const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${acessKey}&count=${count}`;
let ready = true;
const AllPosts = () => {
  const [scroll, setScroll] = useState([]);
  const { update, apiPosts, filterPost, pseudoPost, search, loading } =
    useContext(MyContext);
  const location = useLocation();
  useEffect(() => {
    const getMorePosts = async () => {
      try {
        const res = await fetch(`${apiUrl}`);
        const data = await res.json();
        const arr = [];

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
        ready &&
        window.scrollY + window.innerHeight >= document.body.offsetHeight - 10
      ) {
        getMorePosts();
        ready = false;
        setTimeout(() => {
          ready = true;
        }, 3000);
      }
    };
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);
  if (loading) return <>Loading...</>;

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
              {apiPosts.slice(0, 10)?.map((post) => (
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
            {update.map((post) => (
              <Post
                key={post._id}
                userName={post?.user?.userName}
                id={post._id}
                title={post.title}
                vote={post.vote}
                image={post.img || `${post?.image}`}
                textArea={post.textArea}
                userPhoto={post?.user?.userPhoto}
              />
            ))}
            {/* {initialPosts?.map((post) => (
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
            ))} */}
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
