import React from "react";
import styled from "styled-components";

const HistoryOfNotifications = ({ notifications }) => {
  console.log(notifications); // Check for data

  return (
    <div>
      {notifications.map((notification, index) => (
        <NotificationCard key={index}>
          <h2>{notification.title}</h2>
          <p>{notification.description}</p>
          <p>Data: {notification.date}</p>
          {/* Adicione outros elementos para exibir o progresso, etc. */}
          {console.log("Rendering notification", notification)} // Check loop execution
        </NotificationCard>
      ))}
    </div>
  );
};

const NotificationCard = styled.div`
  background-color: "yellow";  // Temporary test color
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

export default HistoryOfNotifications;