// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaLogin from "./pages/tela-login/src/App";
import NotificacaoPopUp from "./pages/notificacao-pop-up/src/App"
import RecuperacaoSenha from "./pages/recuperacao-senha/src/App";
import TelaPrincipal from "./pages/tela_principal/src/App"; 
import HistoryOfGoals from "./pages/tela_principal/src/HistoryOfGoals";
import HistoryOfNotifications from "./pages/tela_principal/src/HistoryOfNotifications";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/TelaPrincipal" element={<TelaPrincipal />} />
        <Route path="/recupSenha" element={<RecuperacaoSenha />} />
        <Route path="/notificacao" element={<NotificacaoPopUp />} />
        <Route path="/notificacao" element={<HistoryOfGoals />} />
        <Route path="/notificacao" element={<HistoryOfNotifications />} />
      </Routes>
    </Router>
  );
}

export default App;
