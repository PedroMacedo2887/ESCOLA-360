import "./ProfessorDashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_escola360.png";
import GestaoTurmas from "../Components/Professor/GestaoTurmas";
import PlanejamentoConteudo from "../Components/Professor/PlanejamentoConteudo";
import AvaliacoesNotas from "../Components/Professor/AvaliacoesNotas";
import Comunicacao from "../Components/Professor/Comunicacao";
import FerramentasAdministrativas from "../Components/Professor/FerramentasAdministrativas";

type Tab = "gestao" | "planejamento" | "avaliacoes" | "comunicacao" | "administrativo";

export default function ProfessorDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("gestao");

  const professorData = {
    nome: "Carlos Silva",
    disciplina: "Matemática",
    turmas: ["9º Ano A", "9º Ano B", "8º Ano A"],
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="professor-dashboard">
      {/* Header */}
      <header className="professor-header">
        <div className="professor-header-left">
          <img src={logo} alt="Escola360" className="professor-logo" />
          <div className="professor-info">
            <h1>Professor Dashboard</h1>
            <p>Bem-vindo, {professorData.nome} - {professorData.disciplina}</p>
          </div>
        </div>
        <button className="professor-logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </header>

      {/* Sidebar Navigation */}
      <div className="professor-container">
        <aside className="professor-sidebar">
          <nav className="professor-nav">
            <button
              className={`nav-item ${activeTab === "gestao" ? "active" : ""}`}
              onClick={() => setActiveTab("gestao")}
            >
              <span className="nav-icon">👥</span>
              <span className="nav-text">Gestão de Turmas</span>
            </button>
            <button
              className={`nav-item ${activeTab === "planejamento" ? "active" : ""}`}
              onClick={() => setActiveTab("planejamento")}
            >
              <span className="nav-icon">📋</span>
              <span className="nav-text">Planejamento</span>
            </button>
            <button
              className={`nav-item ${activeTab === "avaliacoes" ? "active" : ""}`}
              onClick={() => setActiveTab("avaliacoes")}
            >
              <span className="nav-icon">📊</span>
              <span className="nav-text">Avaliações e Notas</span>
            </button>
            <button
              className={`nav-item ${activeTab === "comunicacao" ? "active" : ""}`}
              onClick={() => setActiveTab("comunicacao")}
            >
              <span className="nav-icon">💬</span>
              <span className="nav-text">Comunicação</span>
            </button>
            <button
              className={`nav-item ${activeTab === "administrativo" ? "active" : ""}`}
              onClick={() => setActiveTab("administrativo")}
            >
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Administrativo</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="professor-main">
          {activeTab === "gestao" && <GestaoTurmas />}
          {activeTab === "planejamento" && <PlanejamentoConteudo />}
          {activeTab === "avaliacoes" && <AvaliacoesNotas />}
          {activeTab === "comunicacao" && <Comunicacao />}
          {activeTab === "administrativo" && <FerramentasAdministrativas />}
        </main>
      </div>
    </div>
  );
}
