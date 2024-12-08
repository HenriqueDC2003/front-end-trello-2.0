import React from "react";
import styled,{ ThemeProvider } from "styled-components";

const theme = {
  background: "#0D0D0D",
  text: "#FFFFFF",
  secondaryText: "#B3B3B3",
  cardBackground: "#1A1A1A",
  lowPriority: "#4CAF50",
  mediumPriority: "#FFEB3B",
  highPriority: "#F44336",
  buttonGreen: "#1DB954", // Verde Spotify
};

const Card = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const HistoryOfNotifications = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
      {/* Add your card content here */}
      <h2>Card Title</h2>
      <p>Card content goes here.</p>
    </Card>
    </ThemeProvider>
    
  );
};

export default HistoryOfNotifications;
