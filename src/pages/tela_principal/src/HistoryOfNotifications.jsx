import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";

const HistoryOfNotifications = () => {
  // Initialize sections with default data
  const [sections, setSections] = useState([
    {
      title: "Sua meta esta quase completa!",
      description: "Fazer trabalho de Matematica",
      date: new Date("2024-12-09"),
    },
    {
      title: "Faltam dois dias para a data da meta",
      description: "Juntar dinheiro para comprar um carro",
      date: new Date("2024-12-11"),
    },
    {
      title: "Falta uma semana para a data da meta",
      description: "Juntar dinheiro para comprar uma casa",
      date: new Date("2024-12-11"),
    },
  ]);

  const handleDeleteSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header>
          <BackButton onClick={() => navigate("/TelaPrincipal")}>
            Voltar
          </BackButton>
          <Title>Histórico de Notificações</Title>
        </Header>
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <NotificationSection key={index}>
              <DeleteButton onClick={() => handleDeleteSection(index)}>X</DeleteButton>
              <ContentWrapper>
                <TitleText>{section.title}</TitleText>
                <DescriptionText>{section.description}</DescriptionText>
              </ContentWrapper>
              <DateText>{section.date.toLocaleDateString()}</DateText>
            </NotificationSection>
          ))
        ) : (
          <p>Nenhuma notificação cadastrada.</p>
        )}
      </AppContainer>
    </ThemeProvider>
  );
};

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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const NotificationSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 15px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  margin-right: 20px;
`;

const TitleText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-right: 15px;
`;

const DescriptionText = styled.span`
  margin-top: 5px;
  font-size: 16px;
  color: ${(props) => props.theme.secondaryText};
`;

const DateText = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.secondaryText};
`;

const BackButton = styled.button`
  background-color: var(--button-background, #1db954);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover, #17a043);
  }
  margin-right: 20px;
  margin-left: 400px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  border: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.highPriority};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center; 
  width: 100%;
`;

const Title = styled.h1`
  font-size: 28px;
  color: ${(props) => props.theme.text};
  padding-left: 30px;
`;

export default HistoryOfNotifications;
