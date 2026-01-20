import "../Styles/GestaoAcademicaSecretaria.css";
import { useState } from "react";

export default function GestaoAcademicaSecretaria() {
  const [activeSubMenu, setActiveSubMenu] = useState("turmas");

  const subMenus = {
    turmas: {
      title: "Consulta de Turmas e Disciplinas",
      content: (
        <div className="content-section">
          <h3>Turmas e Disciplinas</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">Filtrar por Ano</button>
            <button className="action-btn secondary">Exportar Lista</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Turma</th>
                  <th>Ano Letivo</th>
                  <th>Professor(a)</th>
                  <th>Alunos</th>
                  <th>Disciplinas</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6º Ano A</td>
                  <td>2025</td>
                  <td>Maria Silva</td>
                  <td>35</td>
                  <td>10</td>
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
    frequencia: {
      title: "Relatórios de Frequência",
      content: (
        <div className="content-section">
          <h3>Acesso a Relatórios de Frequência e Notas</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">Filtrar por Turma</button>
            <button className="action-btn secondary">Filtrar por Aluno</button>
            <button className="action-btn secondary">Exportar Relatório</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Turma</th>
                  <th>Frequência</th>
                  <th>Média Geral</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maria Santos</td>
                  <td>6º Ano A</td>
                  <td>92%</td>
                  <td>8.5</td>
                  <td>
                    <span className="status-badge success">Aprovado</span>
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
    calendario: {
      title: "Calendário Escolar",
      content: (
        <div className="content-section">
          <h3>Calendário Escolar Oficial</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">Novo Evento</button>
            <button className="action-btn secondary">
              Exportar Calendário
            </button>
          </div>
          <div className="calendar-events">
            <div className="event-item">
              <h4>Início do Ano Letivo</h4>
              <p>10 de fevereiro de 2025</p>
              <span className="event-type">Evento Escolar</span>
            </div>
            <div className="event-item">
              <h4>Avaliação Parcial</h4>
              <p>17-21 de março de 2025</p>
              <span className="event-type">Avaliação</span>
            </div>
            <div className="event-item">
              <h4>Feriado - Carnaval</h4>
              <p>03 de março de 2025</p>
              <span className="event-type">Feriado</span>
            </div>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "turmas", label: "Turmas e Disciplinas", icon: "📚" },
    { key: "frequencia", label: "Frequência e Notas", icon: "📊" },
    { key: "calendario", label: "Calendário", icon: "📅" },
  ];

  return (
    <div className="gestao-academica-secretaria">
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
