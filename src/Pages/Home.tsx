import "./Home.css";
import logo from "../assets/logo_escola360.png";
import { useNavigate } from "react-router-dom";

export default function Escola360Home() {
  const navigate = useNavigate();

  // Envia para o login com o tipo escolhido
  const goToLogin = (userType: string) => {
    navigate("/login", { state: { userType } });
  };

  return (
    <div className="home-container">
      <div className="home-card">
        {/* Logo */}
        <div className="logo-area">
          <img src={logo} alt="Escola360 Logo" className="home-logo" />
          <h1 className="home-title">Escola360</h1>
        </div>

        {/* Título */}
        <p className="select-title">Escolha uma opção:</p>

        {/* Opções */}
        <div className="option-grid">
          <button className="option-btn" onClick={() => goToLogin("Aluno")}>
            <span className="option-icon">🎓</span>
            <span className="option-label">Aluno / Responsáveis</span>
          </button>

          <button className="option-btn" onClick={() => goToLogin("Professor")}>
            <span className="option-icon">👨‍🏫</span>
            <span className="option-label">Professor</span>
          </button>

          <button className="option-btn" onClick={() => goToLogin("Direção")}>
            <span className="option-icon">👔</span>
            <span className="option-label">Direção / Coordenação</span>
          </button>

          <button
            className="option-btn"
            onClick={() => goToLogin("Secretaria")}
          >
            <span className="option-icon">📋</span>
            <span className="option-label">Secretaria</span>
          </button>
        </div>
      </div>
    </div>
  );
}
