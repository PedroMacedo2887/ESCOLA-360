import "./DashboardDireção.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GestaoAcademica from "../Components/Direção/GestaoAcademica";
import GestaoAlunos from "../Components/Direção/GestaoAlunos";
import GestaoProfessores from "../Components/Direção/GestaoProfessores";
import GestaoAdministrativa from "../Components/Direção/GestaoAdministrativa";
import ComunicacaoInstitucional from "../Components/Direção/ComunicacaoInstitucional";
import RelatoriosIndicadores from "../Components/Direção/RelatoriosIndicadores";

export default function DashboardDireção() {
  const [activeMenu, setActiveMenu] = useState("gestao-academica");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "gestao-academica",
      label: "Gestão Acadêmica",
      icon: "📚",
      component: <GestaoAcademica />,
    },
    {
      id: "gestao-alunos",
      label: "Gestão de Alunos",
      icon: "👤",
      component: <GestaoAlunos />,
    },
    {
      id: "gestao-professores",
      label: "Gestão de Professores",
      icon: "👨‍🏫",
      component: <GestaoProfessores />,
    },
    {
      id: "gestao-administrativa",
      label: "Gestão Administrativa",
      icon: "⚙️",
      component: <GestaoAdministrativa />,
    },
    {
      id: "comunicacao",
      label: "Comunicação Institucional",
      icon: "💬",
      component: <ComunicacaoInstitucional />,
    },
    {
      id: "relatorios",
      label: "Relatórios e Indicadores",
      icon: "📊",
      component: <RelatoriosIndicadores />,
    },
  ];

  const currentComponent =
    menuItems.find((item) => item.id === activeMenu)?.component || null;

  return (
    <div className="direcao-dashboard">
      {/* Header */}
      <header className="direcao-header">
        <div className="header-left">
          <button
            className="menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <h1 className="header-title">Direção / Coordenação Pedagógica</h1>
        </div>
        <div className="header-right">
          <div className="user-info">
            <span className="user-name">Diretor(a)</span>
            <button className="logout-btn" onClick={() => navigate("/login")}>
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="direcao-container">
        {/* Sidebar */}
        <aside
          className={`direcao-sidebar ${isSidebarOpen ? "open" : "closed"}`}
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
        <main className="direcao-main">
          <div className="main-content">{currentComponent}</div>
        </main>
      </div>
    </div>
  );
}
