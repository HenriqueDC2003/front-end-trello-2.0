import React from "react";
import "./NotificationBubble.css";

const NotificationBubble = ({ title, message, onClose }) => {
  return (
    <div className="notification-bubble">
      <div className="notification-content">
        <h4 className="notification-title">{title}</h4>
        <p className="notification-message">{message}</p>
      </div>
      <button className="notification-close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default NotificationBubble;
