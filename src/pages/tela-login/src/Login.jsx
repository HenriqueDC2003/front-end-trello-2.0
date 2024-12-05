import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/TelaPrincipal');  // Navega para a página About
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Bem-vindo!</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
          </div>
          <button type="button" className="login-button" onClick={handleClick}>Entrar</button>
        </form>
        <p className="login-footer">
          Esqueceu sua senha? <a href="#">Recupere aqui</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
