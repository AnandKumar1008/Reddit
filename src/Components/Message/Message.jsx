import React, { useContext } from "react";
import "./Message.css";
import Menu from "../Menu/Menu";
import { MyContext } from "../../App";
const Message = () => {
  const { menu } = useContext(MyContext);
  return (
    <div className="reddit_clone-message_comp">
      {menu && (
        <div className="reddit_clone-pseudo_element">
          <Menu />
        </div>
      )}
      <div className="reddit_clone-message">
        <section className="reddit_clone-message_header">
          <div className="reddit_clone-message_heading">
            <h4>Send A Private Message </h4>
            <h4>Inbox</h4>
            <h4>Sent</h4>
          </div>
          <div className="reddit_clone-message_select">
            <button>All</button>
            <button>Unread</button>
            <button>Message</button>
            <button>Comment Replies</button>
            <button>Post Replies</button>
            <button>Username Mentions</button>
          </div>
        </section>
        <section className="reddit_clone-message_body">
          <div className="reddit_clone-message_body_part">
            <p>there doesn't seem to be anything here</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Message;
