import "../Styles/ComunicacaoSecretaria.css";
import { useState } from "react";

export default function ComunicacaoSecretaria() {
  const [activeSubMenu, setActiveSubMenu] = useState("comunicados");

  const subMenus = {
    comunicados: {
      title: "Envio de Comunicados",
      content: (
        <div className="content-section">
          <h3>Envio de Comunicados Administrativos</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Comunicado</button>
            <button className="action-btn secondary">Rascunhos</button>
            <button className="action-btn secondary">Histórico</button>
          </div>
          <div className="message-form">
            <label>Destinatários</label>
            <div className="recipient-checkboxes">
              <label>
                <input type="checkbox" /> Todos os Alunos
              </label>
              <label>
                <input type="checkbox" /> Todos os Responsáveis
              </label>
              <label>
                <input type="checkbox" /> Turma Específica
              </label>
            </div>
            <label>Assunto</label>
            <input
              type="text"
              placeholder="Digite o assunto"
              className="form-input"
            />
            <label>Mensagem</label>
            <textarea
              placeholder="Digite o comunicado"
              className="form-textarea"
            ></textarea>
            <button className="action-btn">Enviar Comunicado</button>
          </div>
        </div>
      ),
    },
    solicitacoes: {
      title: "Protocolo Digital",
      content: (
        <div className="content-section">
          <h3>Atendimento a Solicitações via Sistema</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Nova Solicitação</button>
            <button className="action-btn secondary">
              Minhas Solicitações
            </button>
            <button className="action-btn secondary">Pendentes</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Protocolo</th>
                  <th>Solicitante</th>
                  <th>Tipo</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SEC001/2025</td>
                  <td>Maria Santos</td>
                  <td>Documentação</td>
                  <td>10/01/2025</td>
                  <td>
                    <span className="status-badge success">Finalizado</span>
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
    mural: {
      title: "Mural de Avisos",
      content: (
        <div className="content-section">
          <h3>Mural de Avisos Institucionais</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Aviso</button>
            <button className="action-btn secondary">Editar Avisos</button>
            <button className="action-btn secondary">Arquivar</button>
          </div>
          <div className="avisos-grid">
            <div className="aviso-card">
              <h4>Encerramento de Inscrições</h4>
              <p>
                As inscrições para o ano letivo de 2025 encerram em 31 de
                janeiro.
              </p>
              <p className="aviso-date">Publicado em: 08/01/2025</p>
              <span className="aviso-priority high">Importante</span>
            </div>
            <div className="aviso-card">
              <h4>Alteração de Horários</h4>
              <p>
                Próxima segunda-feira não haverá aulas por causa da manutenção.
              </p>
              <p className="aviso-date">Publicado em: 09/01/2025</p>
              <span className="aviso-priority medium">Normal</span>
            </div>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "comunicados", label: "Comunicados", icon: "📢" },
    { key: "solicitacoes", label: "Protocolos", icon: "🔖" },
    { key: "mural", label: "Mural de Avisos", icon: "📌" },
  ];

  return (
    <div className="comunicacao-secretaria">
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
