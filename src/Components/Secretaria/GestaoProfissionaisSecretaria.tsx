import "../Styles/GestaoProfissionaisSecretaria.css";
import { useState } from "react";

export default function GestaoProfissionaisSecretaria() {
  const [activeSubMenu, setActiveSubMenu] = useState("cadastro");

  const subMenus = {
    cadastro: {
      title: "Cadastro de Profissionais",
      content: (
        <div className="content-section">
          <h3>Cadastro de Professores e Equipe Administrativa</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Profissional</button>
            <button className="action-btn secondary">Editar Dados</button>
            <button className="action-btn secondary">Buscar</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Matrícula</th>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025P001</td>
                  <td>João Silva</td>
                  <td>Professor de Matemática</td>
                  <td>joao@escola360.com</td>
                  <td>(11) 99999-0000</td>
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
    horarios: {
      title: "Controle de Horários",
      content: (
        <div className="content-section">
          <h3>Controle de Horários e Contratos</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">
              Filtrar por Profissional
            </button>
            <button className="action-btn secondary">Editar Horários</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Profissional</th>
                  <th>Cargo</th>
                  <th>Horário</th>
                  <th>Contrato</th>
                  <th>Validade</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>João Silva</td>
                  <td>Professor</td>
                  <td>08:00 - 17:00</td>
                  <td>CLT</td>
                  <td>--</td>
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
    vinculo: {
      title: "Declarações de Vínculo",
      content: (
        <div className="content-section">
          <h3>Emissão de Declarações de Vínculo Empregatício</h3>
          <div className="action-buttons">
            <button className="action-btn">Gerar Declaração</button>
            <button className="action-btn secondary">
              Declarações Emitidas
            </button>
            <button className="action-btn secondary">Histórico</button>
          </div>
          <div className="vinculo-form">
            <label>Selecione o Profissional</label>
            <select className="form-select">
              <option>-- Selecione --</option>
              <option>João Silva</option>
              <option>Maria Santos</option>
              <option>Carlos Oliveira</option>
            </select>
            <label>Tipo de Declaração</label>
            <select className="form-select">
              <option>Declaração de Vínculo</option>
              <option>Declaração de Serviço</option>
              <option>Declaração de Remuneração</option>
              <option>Declaração de Carga Horária</option>
            </select>
            <label>Período</label>
            <input type="date" className="form-input" />
            <button className="action-btn">Gerar e Imprimir</button>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "cadastro", label: "Cadastro", icon: "👥" },
    { key: "horarios", label: "Horários", icon: "⏰" },
    { key: "vinculo", label: "Declarações", icon: "📄" },
  ];

  return (
    <div className="gestao-profissionais-secretaria">
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
