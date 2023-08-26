import React from "react";
import notFound from "../Image/404.jpg";
const NotFound = () => {
  return (
    <div
      className="reddit_clone-not_found"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={notFound}
        alt=""
        style={{
          maxWidth: "100%",
          height: "100vh",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default NotFound;
