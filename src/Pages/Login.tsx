import "./Login.css";
import logo from "../assets/logo_escola360.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const userType = location.state?.userType || "Usuário";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!usuario.trim() || !senha.trim()) {
      setErro("Preencha todos os campos");
      return;
    }

    // Simulação de login - você pode conectar com uma API aqui
    if (userType.toLowerCase().includes("aluno")) {
      // Redireciona para o dashboard do aluno
      navigate("/aluno-dashboard");
    } else if (userType.toLowerCase().includes("professor")) {
      // Redireciona para o dashboard do professor
      navigate("/professor-dashboard");
    } else if (
      userType.toLowerCase().includes("direção") ||
      userType.toLowerCase().includes("coordenação")
    ) {
      // Redireciona para o dashboard da direção
      navigate("/direcao-dashboard");
    } else if (userType.toLowerCase().includes("secretaria")) {
      // Redireciona para o dashboard da secretaria
      navigate("/secretaria-dashboard");
    } else {
      // Para outros tipos de usuário, você pode redirecionar para outras páginas
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      {/* Topo */}
      <div className="login-header">
        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
          title="Voltar para Home"
        >
          ← Voltar
        </button>
        <div className="login-logo-circle">
          <img src={logo} alt="Escola360 Logo" className="login-logo-img" />
        </div>
      </div>

      {/* Form */}
      <h1 className="login-user-text">{userType}</h1>

      <div className="login-form">
        {erro && <p className="login-erro">{erro}</p>}

        <form onSubmit={handleLogin}>
          <label className="login-label">Usuário</label>
          <div className="login-input-area">
            <input
              type="text"
              placeholder="Nome"
              className="login-input"
              value={usuario}
              onChange={(e) => {
                setUsuario(e.target.value);
                setErro("");
              }}
            />
            <span className="input-icon">👤</span>
          </div>

          <label className="login-label">Senha</label>
          <div className="login-input-area">
            <input
              type="password"
              placeholder="***********"
              className="login-input"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
                setErro("");
              }}
            />
            <span className="input-icon">👁️‍🗨️</span>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <p className="login-recover">Recuperar senha</p>
      </div>
    </div>
  );
}
