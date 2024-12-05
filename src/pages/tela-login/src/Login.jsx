import React from "react";
import "./Login.css";

const Login = () => {
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
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <p className="login-footer">
          Esqueceu sua senha? <a href="#">Recupere aqui</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
