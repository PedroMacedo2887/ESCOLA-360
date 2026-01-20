import "../Styles/GestaoAdministrativa.css";
import { useState } from "react";

export default function GestaoAdministrativa() {
  const [activeSubMenu, setActiveSubMenu] = useState("calendario");

  const subMenus = {
    calendario: {
      title: "Calendário Escolar",
      icon: "📅",
      content: (
        <div className="content-section">
          <h3>Calendário Escolar Oficial</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Evento</button>
            <button className="action-btn secondary">Editar Eventos</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="calendar-grid">
            <div className="calendar-event">
              <h4>Início do Ano Letivo</h4>
              <p>10 de fevereiro de 2025</p>
              <span className="event-type">Evento</span>
            </div>
            <div className="calendar-event">
              <h4>Reunião Pedagógica</h4>
              <p>20 de fevereiro de 2025</p>
              <span className="event-type">Reunião</span>
            </div>
            <div className="calendar-event">
              <h4>Feriado - Carnaval</h4>
              <p>03 de março de 2025</p>
              <span className="event-type">Feriado</span>
            </div>
            <div className="calendar-event">
              <h4>Avaliação Parcial</h4>
              <p>17-21 de março de 2025</p>
              <span className="event-type">Evento</span>
            </div>
          </div>
        </div>
      ),
    },
    recursos: {
      title: "Controle de Recursos",
      icon: "📦",
      content: (
        <div className="content-section">
          <h3>Controle de Recursos e Materiais Pedagógicos</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Recurso</button>
            <button className="action-btn secondary">Inventário</button>
            <button className="action-btn secondary">Requisições</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Recurso</th>
                  <th>Tipo</th>
                  <th>Quantidade</th>
                  <th>Localização</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Projetor Multimídia</td>
                  <td>Equipamento</td>
                  <td>8</td>
                  <td>Sala de Aula</td>
                  <td>
                    <span className="status-badge success">Disponível</span>
                  </td>
                  <td>
                    <button className="action-icon">✏️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    financeiro: {
      title: "Relatórios Financeiros",
      icon: "💰",
      content: (
        <div className="content-section">
          <h3>Relatórios Financeiros Básicos</h3>
          <div className="action-buttons">
            <button className="action-btn">Relatório de Mensalidades</button>
            <button className="action-btn">Controle de Inadimplência</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total Arrecadado</h4>
              <p className="stat-value">R$ 150.000</p>
              <p className="stat-desc">Período atual</p>
            </div>
            <div className="stat-card">
              <h4>Alunos em Dia</h4>
              <p className="stat-value">450</p>
              <p className="stat-desc">De 500 alunos</p>
            </div>
            <div className="stat-card">
              <h4>Inadimplência</h4>
              <p className="stat-value">10%</p>
              <p className="stat-desc">50 alunos</p>
            </div>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Mês</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maria Santos</td>
                  <td>Janeiro 2025</td>
                  <td>R$ 500,00</td>
                  <td>
                    <span className="status-badge success">Pago</span>
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
    atividades: {
      title: "Atividades Extracurriculares",
      icon: "🎨",
      content: (
        <div className="content-section">
          <h3>Gestão de Atividades Extracurriculares e Projetos Especiais</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Nova Atividade</button>
            <button className="action-btn">+ Novo Projeto</button>
            <button className="action-btn secondary">Editar</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Responsável</th>
                  <th>Alunos Participantes</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Clube de Robótica</td>
                  <td>Atividade Extracurricular</td>
                  <td>Prof. Carlos</td>
                  <td>25</td>
                  <td>
                    <span className="status-badge success">Ativo</span>
                  </td>
                  <td>
                    <button className="action-icon">✏️</button>
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
    { key: "calendario", label: "Calendário Escolar", icon: "📅" },
    { key: "recursos", label: "Recursos e Materiais", icon: "📦" },
    { key: "financeiro", label: "Financeiro", icon: "💰" },
    { key: "atividades", label: "Atividades Extras", icon: "🎨" },
  ];

  return (
    <div className="gestao-administrativa">
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
