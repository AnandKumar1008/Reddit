import React, { useContext } from "react";
import { MyContext } from "../../App";
import Post from "../Post/Post";
import "./Allposts.css";
import { initialPosts } from "../initialPosts";
const AllPosts = () => {
  const { update, loading, setLoading, isAllPage } = useContext(MyContext);
  // if (update.length === 0) {
  //   return (
  //     <div
  //       className="reddit_clone-allposts"
  //       style={{
  //         fontFamily: "var(--font-c)",
  //         width: "80%",
  //         margin: "2rem auto",
  //         fontSize: "4rem",
  //         color: "rgba(0,0,0,0.1)",
  //       }}
  //     >
  //       Make Your First Post To See Magic
  //     </div>
  //   );
  // }

  return (
    <div className="reddit_clone-allposts">
      {/* <h3 style={{ textAlign: "center", fontFamily: "var(--font-c)" }}>
        {loading}
      </h3> */}
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
