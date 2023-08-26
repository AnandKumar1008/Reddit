import React, { useContext } from "react";
import Nav from "../../Components/Nav/Nav";
import Notification from "../../Components/Notification/Notification";
import { MyContext } from "../../MyContext";
import "./NotificationPage.css";
const NotificationPage = () => {
  const { over_lay, showForm } = useContext(MyContext);
  return (
    <div
      className="reddit_clone-notification_page"
      style={showForm == "none" ? {} : over_lay}
    >
      <Notification />
      <Nav />
    </div>
  );
};

export default NotificationPage;
