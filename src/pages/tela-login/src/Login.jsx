import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/TelaPrincipal');  
  };

  const recupSenha = () => {
    navigate('/recupSenha');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Bem-vindo!</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="username" placeholder="Digite seu username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
          </div>
          <button type="submit" className="login-button" onClick={handleClick}>Entrar</button>
        </form>
        <p className="login-footer" onClick={recupSenha}>
          Esqueceu sua senha? <a href="#">Recupere aqui</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
