import "./DashboardSecretaria.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GestaoAlunosSecretaria from "../Components/Secretaria/GestaoAlunosSecretaria";
import GestaoProfissionaisSecretaria from "../Components/Secretaria/GestaoProfissionaisSecretaria";
import GestaoAcademicaSecretaria from "../Components/Secretaria/GestaoAcademicaSecretaria";
import GestaoFinanceiraSecretaria from "../Components/Secretaria/GestaoFinanceiraSecretaria";
import ComunicacaoSecretaria from "../Components/Secretaria/ComunicacaoSecretaria";
import RelatoriosArquivosSecretaria from "../Components/Secretaria/RelatoriosArquivosSecretaria";

export default function DashboardSecretaria() {
  const [activeMenu, setActiveMenu] = useState("gestao-alunos");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "gestao-alunos",
      label: "Gestão de Alunos",
      icon: "👤",
      component: <GestaoAlunosSecretaria />,
    },
    {
      id: "gestao-profissionais",
      label: "Gestão de Profissionais",
      icon: "👥",
      component: <GestaoProfissionaisSecretaria />,
    },
    {
      id: "gestao-academica",
      label: "Gestão Acadêmica",
      icon: "📚",
      component: <GestaoAcademicaSecretaria />,
    },
    {
      id: "gestao-financeira",
      label: "Gestão Financeira",
      icon: "💰",
      component: <GestaoFinanceiraSecretaria />,
    },
    {
      id: "comunicacao",
      label: "Comunicação",
      icon: "📢",
      component: <ComunicacaoSecretaria />,
    },
    {
      id: "relatorios",
      label: "Relatórios e Arquivos",
      icon: "📊",
      component: <RelatoriosArquivosSecretaria />,
    },
  ];

  const currentComponent =
    menuItems.find((item) => item.id === activeMenu)?.component || null;

  return (
    <div className="secretaria-dashboard">
      {/* Header */}
      <header className="secretaria-header">
        <div className="header-left">
          <button
            className="menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <h1 className="header-title">Secretaria Escolar</h1>
        </div>
        <div className="header-right">
          <div className="user-info">
            <span className="user-name">Secretário(a)</span>
            <button className="logout-btn" onClick={() => navigate("/login")}>
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="secretaria-container">
        {/* Sidebar */}
        <aside
          className={`secretaria-sidebar ${isSidebarOpen ? "open" : "closed"}`}
        >
          <nav className="sidebar-nav">
            <h2 className="sidebar-title">Menu Principal</h2>
            <ul className="menu-list">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`menu-button ${
                      activeMenu === item.id ? "active" : ""
                    }`}
                    onClick={() => setActiveMenu(item.id)}
                  >
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-label">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sidebar-footer">
            <p className="footer-text">Escola360 © 2025</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="secretaria-main">
          <div className="main-content">{currentComponent}</div>
        </main>
      </div>
    </div>
  );
}
