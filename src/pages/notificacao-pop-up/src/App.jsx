import React, { useState } from "react";
import NotificationBubble from "./NotificationBubble";

const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <button onClick={handleShowNotification}>Receber Notificação</button>
      {showNotification && (
        <NotificationBubble
          title="Nova Mensagem"
          message="Você recebeu uma nova mensagem!"
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};

export default App;
