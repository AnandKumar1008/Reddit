import React, { useContext } from "react";
import { MyContext } from "../../App";
import Post from "../Post/Post";
import "./Allposts.css";
import { initialPosts } from "../initialPosts";
import { useLocation } from "react-router-dom";
const AllPosts = () => {
  const { update, apiPosts } = useContext(MyContext);
  const location = useLocation();

  return (
    <div className="reddit_clone-allposts">
      {location.pathname == "/" ? (
        false
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
    </div>
  );
};

export default AllPosts;
