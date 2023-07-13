import React from "react";
import Notification from "../../Components/Notification/Notification";
import "./NotificationPage.css";
import Nav from "../../Components/Nav/Nav";
const NotificationPage = () => {
  return (
    <div className="reddit_clone-notification_page">
      <Notification />
      <Nav />
    </div>
  );
};

export default NotificationPage;
