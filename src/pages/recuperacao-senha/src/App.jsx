import React, { useState } from "react";
import "./PasswordRecovery.css";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 
    setSuccess(false); 

    if (!email) {
      setError("O campo de e-mail não pode estar vazio.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    setSuccess(true); 
    setEmail(""); 
  };

  return (
    <div className="recovery-container">
      <h1 className="recovery-title">Recuperar Senha</h1>
      <p className="recovery-instructions">
        Insira o seu e-mail cadastrado para receber um link de redefinição.
      </p>
      <form className="recovery-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className={`recovery-input ${error ? "input-error" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">E-mail enviado com sucesso!</p>}
        <button type="submit" className="recovery-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
