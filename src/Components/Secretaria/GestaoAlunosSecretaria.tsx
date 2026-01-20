import "../Styles/GestaoAlunosSecretaria.css";
import { useState } from "react";

export default function GestaoAlunosSecretaria() {
  const [activeSubMenu, setActiveSubMenu] = useState("cadastro");

  const subMenus = {
    cadastro: {
      title: "Cadastro de Alunos",
      content: (
        <div className="content-section">
          <h3>Cadastro e Atualização de Dados</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Aluno</button>
            <button className="action-btn secondary">Editar Dados</button>
            <button className="action-btn secondary">Buscar Aluno</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Matrícula</th>
                  <th>Nome</th>
                  <th>Turma</th>
                  <th>Responsável</th>
                  <th>Contato</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025001</td>
                  <td>Maria Santos</td>
                  <td>6º Ano A</td>
                  <td>Ana Silva</td>
                  <td>(11) 98765-4321</td>
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
    matriculas: {
      title: "Matrículas e Transferências",
      content: (
        <div className="content-section">
          <h3>Matrículas, Rematrículas e Transferências</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Nova Matrícula</button>
            <button className="action-btn">+ Rematrícula</button>
            <button className="action-btn">+ Transferência</button>
            <button className="action-btn secondary">
              Solicitações Pendentes
            </button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Tipo</th>
                  <th>Data Solicitação</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>João Costa</td>
                  <td>Transferência</td>
                  <td>10/01/2025</td>
                  <td>
                    <span className="status-badge warning">Pendente</span>
                  </td>
                  <td>
                    <button className="action-icon">✏️</button>
                    <button className="action-icon">✅</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    documentos: {
      title: "Emissão de Documentos",
      content: (
        <div className="content-section">
          <h3>Emissão de Documentos Escolares</h3>
          <div className="action-buttons">
            <button className="action-btn">Declaração de Matrícula</button>
            <button className="action-btn">Histórico Escolar</button>
            <button className="action-btn">Boletim</button>
            <button className="action-btn">Atestados</button>
          </div>
          <div className="document-form">
            <label>Selecione o Aluno</label>
            <input
              type="text"
              placeholder="Digite o nome ou matrícula"
              className="form-input"
            />
            <label>Tipo de Documento</label>
            <select className="form-select">
              <option>Declaração de Matrícula</option>
              <option>Histórico Escolar</option>
              <option>Boletim</option>
              <option>Atestado de Matrícula</option>
              <option>Atestado de Frequência</option>
            </select>
            <button className="action-btn">Gerar Documento</button>
          </div>
        </div>
      ),
    },
    ocorrencias: {
      title: "Ocorrências Administrativas",
      content: (
        <div className="content-section">
          <h3>Registro de Ocorrências Administrativas</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Nova Solicitação</button>
            <button className="action-btn secondary">Protocolos</button>
            <button className="action-btn secondary">Histórico</button>
          </div>
          <div className="ocorrencias-form">
            <label>Aluno</label>
            <input
              type="text"
              placeholder="Digite o nome do aluno"
              className="form-input"
            />
            <label>Tipo de Solicitação</label>
            <select className="form-select">
              <option>Solicitação de Documento</option>
              <option>Recurso Administrativo</option>
              <option>Solicitação de Informação</option>
              <option>Reclamação/Sugestão</option>
            </select>
            <label>Descrição</label>
            <textarea
              placeholder="Descreva a solicitação"
              className="form-textarea"
            ></textarea>
            <button className="action-btn">Registrar Solicitação</button>
          </div>
          <div className="table-container" style={{ marginTop: "20px" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Protocolo</th>
                  <th>Aluno</th>
                  <th>Tipo</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001/2025</td>
                  <td>Maria Santos</td>
                  <td>Documento</td>
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
  };

  const subMenuItems = [
    { key: "cadastro", label: "Cadastro de Alunos", icon: "👤" },
    { key: "matriculas", label: "Matrículas", icon: "📝" },
    { key: "documentos", label: "Documentos", icon: "📄" },
    { key: "ocorrencias", label: "Ocorrências", icon: "📌" },
  ];

  return (
    <div className="gestao-alunos-secretaria">
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
