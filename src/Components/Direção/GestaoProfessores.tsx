import "../Styles/GestaoProfessores.css";
import { useState } from "react";

export default function GestaoProfessores() {
  const [activeSubMenu, setActiveSubMenu] = useState("cadastro");

  const subMenus = {
    cadastro: {
      title: "Cadastro de Professores",
      icon: "👨‍🏫",
      content: (
        <div className="content-section">
          <h3>Cadastro de Professores e Funcionários</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Professor</button>
            <button className="action-btn">+ Novo Funcionário</button>
            <button className="action-btn secondary">Editar Perfil</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Matrícula</th>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025P001</td>
                  <td>João Silva</td>
                  <td>Professor</td>
                  <td>joao@escola360.com</td>
                  <td>
                    <span className="status-badge success">Ativo</span>
                  </td>
                  <td>
                    <button className="action-icon">✏️</button>
                    <button className="action-icon">👁️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    cargahoraria: {
      title: "Carga Horária",
      icon: "⏰",
      content: (
        <div className="content-section">
          <h3>Controle de Carga Horária e Disciplinas</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">
              Filtrar por Professor
            </button>
            <button className="action-btn secondary">Editar Atribuições</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Professor</th>
                  <th>Disciplinas Atribuídas</th>
                  <th>Carga Horária Semanal</th>
                  <th>Carga Horária Total</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>João Silva</td>
                  <td>Matemática, Física</td>
                  <td>20h</td>
                  <td>40h</td>
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
    desempenho: {
      title: "Relatórios de Desempenho",
      icon: "📊",
      content: (
        <div className="content-section">
          <h3>Relatórios de Desempenho Docente</h3>
          <div className="action-buttons">
            <button className="action-btn">Entrega de Notas</button>
            <button className="action-btn">Frequência de Aulas</button>
            <button className="action-btn">Planejamento Entregue</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Professores em Dia</h4>
              <p className="stat-value">18</p>
              <p className="stat-desc">Entregas em dia</p>
            </div>
            <div className="stat-card">
              <h4>Professores Atrasados</h4>
              <p className="stat-value">2</p>
              <p className="stat-desc">Com atrasos</p>
            </div>
            <div className="stat-card">
              <h4>Frequência Média</h4>
              <p className="stat-value">96%</p>
              <p className="stat-desc">Corpo docente</p>
            </div>
          </div>
        </div>
      ),
    },
    comunicacao: {
      title: "Comunicação",
      icon: "💬",
      content: (
        <div className="content-section">
          <h3>Comunicação Direta com Professores</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Nova Mensagem</button>
            <button className="action-btn secondary">
              Mensagens Recebidas
            </button>
            <button className="action-btn secondary">Comunicados</button>
          </div>
          <div className="message-form">
            <label>Selecione Destinatário(s)</label>
            <select className="form-select">
              <option>-- Selecione --</option>
              <option>Todos os Professores</option>
              <option>Professores de Português</option>
              <option>Professores de Matemática</option>
              <option>Selecionar Individualmente</option>
            </select>
            <label>Assunto</label>
            <input
              type="text"
              placeholder="Digite o assunto"
              className="form-input"
            />
            <label>Mensagem</label>
            <textarea
              placeholder="Digite sua mensagem"
              className="form-textarea"
            ></textarea>
            <button className="action-btn">Enviar Mensagem</button>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "cadastro", label: "Cadastro", icon: "👨‍🏫" },
    { key: "cargahoraria", label: "Carga Horária", icon: "⏰" },
    { key: "desempenho", label: "Desempenho", icon: "📊" },
    { key: "comunicacao", label: "Comunicação", icon: "💬" },
  ];

  return (
    <div className="gestao-professores">
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
