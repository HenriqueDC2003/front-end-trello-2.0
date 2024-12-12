import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  // Estados para trabalhar com os dados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para tratar o submit
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Efetuar fetch com a API para recuperar o usuário
    const response = await fetch(`http://127.0.0.1:8000/api/users/get_by_username/${username}/`, {
      method: 'GET',
    });

    if (!response.ok) {
      alert('Não foi possível realizar login!');
      return;
    } else if (response.status === 404) {
      alert(`O usuário de nome ${username} não foi encontrado!`);
      return;
    }

    const user = await response.json();

    navigate('/TelaPrincipal', { state: { user: user } });
  };

  const recupSenha = () => {
    navigate('/recupSenha');
  };

  return (
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Bem-vindo!</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Nome de Usuário</label>
              <input
                  type="text"
                  id="username"
                  placeholder="Digite seu nome de usuário"
                  value={username} // Valor vinculado ao estado
                  onChange={(e) => setUsername(e.target.value)} // Atualiza o estado
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  value={password} // Valor vinculado ao estado
                  onChange={(e) => setPassword(e.target.value)} // Atualiza o estado
              />
            </div>
            <button type="submit" className="login-button">Entrar</button>
          </form>
          <p className="login-footer" onClick={recupSenha}>
            Esqueceu sua senha? <a href="#">Recupere aqui</a>
          </p>
        </div>
      </div>
  );
};

export default Login;
