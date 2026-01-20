import "../Styles/GestaoAcademica.css";
import { useState } from "react";

export default function GestaoAcademica() {
  const [activeSubMenu, setActiveSubMenu] = useState("turmas");

  const subMenus = {
    turmas: {
      title: "Gestão de Turmas e Disciplinas",
      icon: "📚",
      content: (
        <div className="content-section">
          <h3>Turmas e Disciplinas</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Nova Turma</button>
            <button className="action-btn">+ Nova Disciplina</button>
            <button className="action-btn secondary">Editar Turmas</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Turma</th>
                  <th>Ano Letivo</th>
                  <th>Disciplinas</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6º Ano A</td>
                  <td>2025</td>
                  <td>12</td>
                  <td>
                    <button className="action-icon">✏️</button>
                    <button className="action-icon">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    professores: {
      title: "Atribuição de Professores",
      icon: "👨‍🏫",
      content: (
        <div className="content-section">
          <h3>Atribuir Professores às Turmas</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Atribuir Professor</button>
            <button className="action-btn secondary">Editar Atribuições</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Professor</th>
                  <th>Disciplina</th>
                  <th>Turma</th>
                  <th>Carga Horária</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>João Silva</td>
                  <td>Matemática</td>
                  <td>6º Ano A</td>
                  <td>20h</td>
                  <td>
                    <button className="action-icon">✏️</button>
                    <button className="action-icon">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    planejamento: {
      title: "Planos de Aula e Cronogramas",
      icon: "📋",
      content: (
        <div className="content-section">
          <h3>Visualizar Planos de Aula e Cronogramas</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">Filtrar por Turma</button>
            <button className="action-btn secondary">
              Filtrar por Professor
            </button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Professor</th>
                  <th>Turma</th>
                  <th>Disciplina</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>João Silva</td>
                  <td>6º Ano A</td>
                  <td>Matemática</td>
                  <td>
                    <span className="status-badge success">Entregue</span>
                  </td>
                  <td>
                    <button className="action-icon">👁️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    relatorios: {
      title: "Relatórios de Desempenho",
      icon: "📊",
      content: (
        <div className="content-section">
          <h3>Relatórios de Desempenho</h3>
          <div className="action-buttons">
            <button className="action-btn">Gerar Relatório por Turma</button>
            <button className="action-btn">
              Gerar Relatório por Disciplina
            </button>
            <button className="action-btn">
              Gerar Relatório por Professor
            </button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Média Geral</h4>
              <p className="stat-value">7.8</p>
              <p className="stat-desc">Todas as turmas</p>
            </div>
            <div className="stat-card">
              <h4>Turmas Acima da Média</h4>
              <p className="stat-value">5</p>
              <p className="stat-desc">De 8 turmas</p>
            </div>
            <div className="stat-card">
              <h4>Turmas Abaixo da Média</h4>
              <p className="stat-value">3</p>
              <p className="stat-desc">De 8 turmas</p>
            </div>
          </div>
        </div>
      ),
    },
    frequencia: {
      title: "Controle de Frequência",
      icon: "✅",
      content: (
        <div className="content-section">
          <h3>Frequência Geral dos Alunos</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">Filtrar por Turma</button>
            <button className="action-btn secondary">
              Filtrar por Período
            </button>
            <button className="action-btn secondary">Exportar Relatório</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Turma</th>
                  <th>Total Alunos</th>
                  <th>Frequência Média</th>
                  <th>Alunos com Risco</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6º Ano A</td>
                  <td>35</td>
                  <td>92%</td>
                  <td>2</td>
                  <td>
                    <button className="action-icon">👁️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "turmas", label: "Turmas e Disciplinas", icon: "📚" },
    { key: "professores", label: "Atribuição de Professores", icon: "👨‍🏫" },
    { key: "planejamento", label: "Planos e Cronogramas", icon: "📋" },
    { key: "relatorios", label: "Relatórios de Desempenho", icon: "📊" },
    { key: "frequencia", label: "Controle de Frequência", icon: "✅" },
  ];

  return (
    <div className="gestao-academica">
      <div className="submenu-horizontal">
        {subMenuItems.map((item) => (
          <button
            key={item.key}
            className={`submenu-item ${
              activeSubMenu === item.key ? "active" : ""
            }`}
            onClick={() => setActiveSubMenu(item.key)}
          >
            <span className="submenu-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="content-container">
        {subMenus[activeSubMenu as keyof typeof subMenus]?.content}
      </div>
    </div>
  );
}
