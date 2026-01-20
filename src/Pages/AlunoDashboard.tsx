import "./AlunoDashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_escola360.png";
import InformacoesPessoais from "../Components/Aluno/InformacoesPessoais";
import ConteudoMateriais from "../Components/Aluno/ConteudoMateriais";
import AvaliacoesAluno from "../Components/Aluno/AvaliacoesAluno";
import ComunicacaoAluno from "../Components/Aluno/ComunicacaoAluno";
import ServicosExtras from "../Components/Aluno/ServicosExtras";

type Tab =
  | "informacoes"
  | "conteudo"
  | "avaliacoes"
  | "comunicacao"
  | "servicos";

export default function AlunoDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("informacoes");

  const alunoData = {
    nome: "João Silva Santos",
    matricula: "2024001",
    turma: "9º Ano A",
    media_geral: 8.2,
    frequencia: 92,
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="aluno-dashboard">
      {/* Header */}
      <header className="aluno-header">
        <div className="aluno-header-left">
          <img src={logo} alt="Escola360" className="aluno-logo" />
          <div className="aluno-info">
            <h1>Meu Portal Acadêmico</h1>
            <p>Bem-vindo, {alunoData.nome}</p>
          </div>
        </div>
        <button className="aluno-logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </header>

      {/* Quick Stats */}
      <div className="aluno-quick-stats">
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <span className="stat-label">Turma</span>
          <span className="stat-value">{alunoData.turma}</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📊</span>
          <span className="stat-label">Média Geral</span>
          <span className="stat-value">{alunoData.media_geral.toFixed(2)}</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">✓</span>
          <span className="stat-label">Frequência</span>
          <span className="stat-value">{alunoData.frequencia}%</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🎓</span>
          <span className="stat-label">Matrícula</span>
          <span className="stat-value">{alunoData.matricula}</span>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="aluno-container">
        <aside className="aluno-sidebar">
          <nav className="aluno-nav">
            <button
              className={`nav-item ${
                activeTab === "informacoes" ? "active" : ""
              }`}
              onClick={() => setActiveTab("informacoes")}
            >
              <span className="nav-icon">👤</span>
              <span className="nav-text">Informações</span>
            </button>
            <button
              className={`nav-item ${activeTab === "conteudo" ? "active" : ""}`}
              onClick={() => setActiveTab("conteudo")}
            >
              <span className="nav-icon">📚</span>
              <span className="nav-text">Conteúdo</span>
            </button>
            <button
              className={`nav-item ${
                activeTab === "avaliacoes" ? "active" : ""
              }`}
              onClick={() => setActiveTab("avaliacoes")}
            >
              <span className="nav-icon">📝</span>
              <span className="nav-text">Avaliações</span>
            </button>
            <button
              className={`nav-item ${
                activeTab === "comunicacao" ? "active" : ""
              }`}
              onClick={() => setActiveTab("comunicacao")}
            >
              <span className="nav-icon">💬</span>
              <span className="nav-text">Comunicação</span>
            </button>
            <button
              className={`nav-item ${activeTab === "servicos" ? "active" : ""}`}
              onClick={() => setActiveTab("servicos")}
            >
              <span className="nav-icon">🎁</span>
              <span className="nav-text">Serviços</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="aluno-main">
          {activeTab === "informacoes" && <InformacoesPessoais />}
          {activeTab === "conteudo" && <ConteudoMateriais />}
          {activeTab === "avaliacoes" && <AvaliacoesAluno />}
          {activeTab === "comunicacao" && <ComunicacaoAluno />}
          {activeTab === "servicos" && <ServicosExtras />}
        </main>
      </div>
    </div>
  );
}
