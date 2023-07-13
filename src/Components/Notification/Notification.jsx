import React from "react";
import robot from "../../Components/Image/robotimg.png";
import "./Notification.css";
import Menu from "../Menu/Menu";
const Notification = () => {
  return (
    <>
      <div className="reddit_clone-pseudo_element">
        <Menu />
      </div>
      <div className="reddit_clone-notification">
        <h3>Notifications</h3>
        <section className="reddit_Clone-notification_items">
          <div className="reddit_clone-notification_items_heading">
            <div className="reddit_clone-notification_activity">
              <button>Activity</button>
              <button>Messages</button>
            </div>
            <div className="reddit_clone-notification_settings">
              <button>Mark as read</button>
              <button>Settings</button>
            </div>
          </div>
          <div className="reddit_clone-notification_body">
            <div className="reddit_clone-notification_body_robot">
              <img src={robot} alt="" />
            </div>
          </div>
        </section>
        <footer className="reddit_clone-notification_footer">
          <h3>You don’t have any activity yet</h3>
          <p>
            That’s ok, maybe you just need the right inspiration. Try posting in
            r/Old_Recipes , a popular community for discussion.
          </p>
          <button>Visit r/Old_Recipies</button>
        </footer>
      </div>
    </>
  );
};

export default Notification;
