import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";


const theme = {
    background: "#0D0D0D",
    text: "#FFFFFF",
    secondaryText: "#B3B3B3",
    cardBackground: "#1A1A1A",
    lowPriority: "#4CAF50",
    mediumPriority: "#FFEB3B",
    highPriority: "#F44336",
    buttonGreen: "#1DB954", // Verde Spotify
}

const HistoryOfGoals = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const goalData = location.state?.goalData || {};
    let goalCount = 4;

    const goals = [
        { id: 1, title: "Fazer trabalho de Matematica", status: "Concluída", deadline: "2023-12-01", creationTime: "2023-11-04" },
        { id: 2, title: "Juntar dinheiro para comprar um carro", status: "Atrasada", deadline: "2023-12-05", creationTime: "2022-04-25" },
        { id: 3, title: "Juntar dinheiro para comprar uma casa", status: "Atual", deadline: "2023-12-10", creationTime: "2023-12-04" },
    ];

    goals.push(
        {
            id: goalCount,
            title: goalData.title,
            status: goalData.status,
            deadline: goalData.deadline,
            creationTime: goalData.creationTime,
        }
    );
    goalCount += 1;

    console.log(goalData)

    const completedGoals = goals.filter((goal) => goal.status === "Concluída");
    const delayedGoals = goals.filter((goal) => goal.status === "Atrasada");
    const currentGoals = goals.filter((goal) => goal.status === "Atual");

    return (
    <ThemeProvider theme={theme}>
      <SuperContainer>
        <Container>
            <Header>
              <BackButton onClick={() => navigate("/TelaPrincipal")}>
                Voltar
              </BackButton>
              <Title>Histórico de Metas</Title>
          </Header>

          <Section>
              <SectionTitle>Metas Concluídas</SectionTitle>
              {completedGoals.length > 0 ? (
              <List>
                  {completedGoals.map((goal) => (
                  <ListItem key={goal.id}>
                    <DeleteButton onClick={() => handleDeleteSection(index)}>X</DeleteButton>
                    <TitleText>{goal.title}</TitleText>
                    <DeadLineText>{goal.deadline}</DeadLineText>
                  </ListItem>
                  ))}
              </List>
              ) : (
              <Message>Nenhuma meta concluída.</Message>
              )}
          </Section>

          <Section>
              <SectionTitle>Metas Atrasadas</SectionTitle>
              {delayedGoals.length > 0 ? (
              <List>
                  {delayedGoals.map((goal) => (
                  <ListItem key={goal.id}>
                    <DeleteButton onClick={() => handleDeleteSection(index)}>X</DeleteButton>
                    <TitleText>{goal.title}</TitleText>
                    <DeadLineText>{goal.deadline}</DeadLineText>
                  </ListItem>
                  ))}
              </List>
              ) : (
              <Message>Nenhuma meta atrasada.</Message>
              )}
          </Section>

          <Section>
              <SectionTitle>Metas Atuais</SectionTitle>
              {currentGoals.length > 0 ? (
              <List>
                  {currentGoals.map((goal) => (
                  <ListItem key={goal.id}>
                    <DeleteButton onClick={() => handleDeleteSection(index)}>X</DeleteButton>
                    <TitleText>{goal.title}</TitleText>
                    <DeadLineText>{goal.deadline}</DeadLineText>
                  </ListItem>
                  ))}
              </List>
              ) : (
              <Message>Nenhuma meta atual.</Message>
              )}
          </Section>
        </Container>
      </SuperContainer>
    </ThemeProvider>
    );
};



const SuperContainer = styled.body`
  background-color: #0D0D0D;
  heigth: 100%;
  width: 100vw;
`;

const Container = styled.div`
`;

const TitleText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-right: 15px;
`;

const DeadLineText = styled.span`
  margin-top: 5px;
  font-size: 16px;
  color: ${(props) => props.theme.secondaryText};
`;

const Header = styled.div`
  display: flex;
  align-items: center; /* Alinha os itens ao topo */
  justify-content: space-between; /* Distribui o espaço entre o botão e o título */
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
    margin-left: 10px;
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

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center; /* Centraliza o título */
  flex-grow: 1; /* Faz o título ocupar o espaço disponível */
  margin-right: 80px;
`;

const Section = styled.section`
  margin-top: 20px;
  align-items: center;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  color: var(--secondary-color);
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #1A1A1A;
  border-radius: 8px;
  align-items: flex-start;
`;

const ListItem = styled.li`
  margin: 10px 0;
  padding: 12px;
  background-color: var(--list-item-background);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Message = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  text-align: center;
`;

export default HistoryOfGoals;
