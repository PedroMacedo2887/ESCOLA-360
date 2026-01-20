import "../Styles/ComunicacaoInstitucional.css";
import { useState } from "react";

export default function ComunicacaoInstitucional() {
  const [activeSubMenu, setActiveSubMenu] = useState("comunicados");

  const subMenus = {
    comunicados: {
      title: "Envio de Comunicados",
      icon: "📢",
      content: (
        <div className="content-section">
          <h3>Envio de Comunicados Gerais</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Comunicado</button>
            <button className="action-btn secondary">Rascunhos</button>
            <button className="action-btn secondary">Histórico</button>
          </div>
          <div className="message-form">
            <label>Destinatários</label>
            <div className="recipient-checkboxes">
              <label>
                <input type="checkbox" defaultChecked /> Todos os Alunos
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Todos os Professores
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Todos os Responsáveis
              </label>
              <label>
                <input type="checkbox" /> Turma Específica
              </label>
            </div>
            <label>Assunto do Comunicado</label>
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
    mural: {
      title: "Mural de Avisos",
      icon: "📋",
      content: (
        <div className="content-section">
          <h3>Mural de Avisos da Escola</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Aviso</button>
            <button className="action-btn secondary">Editar Avisos</button>
            <button className="action-btn secondary">Arquivar</button>
          </div>
          <div className="avisos-grid">
            <div className="aviso-card">
              <h4>Entrega de Boletins</h4>
              <p>
                Os boletins do 1º bimestre serão entregues no dia 28 de março.
              </p>
              <p className="aviso-date">Publicado em: 10/01/2025</p>
              <span className="aviso-priority high">Importante</span>
            </div>
            <div className="aviso-card">
              <h4>Reunião Pedagógica</h4>
              <p>
                Todos os professores devem comparecer à reunião no dia
                20/02/2025 às 14h.
              </p>
              <p className="aviso-date">Publicado em: 08/01/2025</p>
              <span className="aviso-priority medium">Normal</span>
            </div>
            <div className="aviso-card">
              <h4>Alteração de Horário</h4>
              <p>
                Próxima sexta não haverá aula no período matutino por feriado.
              </p>
              <p className="aviso-date">Publicado em: 09/01/2025</p>
              <span className="aviso-priority high">Importante</span>
            </div>
          </div>
        </div>
      ),
    },
    mensagens: {
      title: "Sistema de Mensagens",
      icon: "💬",
      content: (
        <div className="content-section">
          <h3>Sistema de Mensagens Internas</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Nova Mensagem</button>
            <button className="action-btn secondary">Caixa de Entrada</button>
            <button className="action-btn secondary">Enviados</button>
          </div>
          <div className="messages-list">
            <div className="message-item">
              <div className="message-header">
                <h4>João Silva</h4>
                <p className="message-date">10/01/2025 - 14:30</p>
              </div>
              <p className="message-body">
                Sobre a entrega dos planos de aula...
              </p>
              <button className="action-icon">📧</button>
            </div>
            <div className="message-item">
              <div className="message-header">
                <h4>Maria Responsável</h4>
                <p className="message-date">09/01/2025 - 10:15</p>
              </div>
              <p className="message-body">
                Dúvida sobre as notas do meu filho...
              </p>
              <button className="action-icon">📧</button>
            </div>
          </div>
        </div>
      ),
    },
    agendamento: {
      title: "Agendamento",
      icon: "📅",
      content: (
        <div className="content-section">
          <h3>Agendamento de Reuniões Pedagógicas</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Agendar Reunião</button>
            <button className="action-btn secondary">Minhas Reuniões</button>
            <button className="action-btn secondary">Cancelar Reunião</button>
          </div>
          <div className="agendamento-form">
            <label>Tipo de Reunião</label>
            <select className="form-select">
              <option>-- Selecione --</option>
              <option>Reunião de Conselho de Classe</option>
              <option>Reunião com Responsável</option>
              <option>Reunião Pedagógica Geral</option>
              <option>Reunião com Professor</option>
              <option>Outra</option>
            </select>
            <label>Data</label>
            <input type="date" className="form-input" />
            <label>Hora</label>
            <input type="time" className="form-input" />
            <label>Participantes</label>
            <input
              type="text"
              placeholder="Digite os nomes"
              className="form-input"
            />
            <label>Descrição</label>
            <textarea
              placeholder="Descreva o assunto da reunião"
              className="form-textarea"
            ></textarea>
            <button className="action-btn">Agendar</button>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "comunicados", label: "Comunicados", icon: "📢" },
    { key: "mural", label: "Mural de Avisos", icon: "📋" },
    { key: "mensagens", label: "Mensagens", icon: "💬" },
    { key: "agendamento", label: "Agendamento", icon: "📅" },
  ];

  return (
    <div className="comunicacao-institucional">
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
