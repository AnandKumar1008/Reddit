import React from "react";

const UserImage = (props) => {
  return (
    <img
      src={props.src}
      alt=""
      style={{ maxWidth: "2rem", maxHeight: "2rem" }}
    />
  );
};

export default UserImage;
