import "../Styles/GestaoAlunos.css";
import { useState } from "react";

export default function GestaoAlunos() {
  const [activeSubMenu, setActiveSubMenu] = useState("cadastro");

  const subMenus = {
    cadastro: {
      title: "Cadastro de Alunos",
      icon: "👤",
      content: (
        <div className="content-section">
          <h3>Cadastro Completo de Alunos</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Novo Aluno</button>
            <button className="action-btn secondary">Importar em Lote</button>
            <button className="action-btn secondary">Editar Aluno</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Matrícula</th>
                  <th>Nome</th>
                  <th>Turma</th>
                  <th>Data Nascimento</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025001</td>
                  <td>Maria Santos</td>
                  <td>6º Ano A</td>
                  <td>15/05/2013</td>
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
    transferencia: {
      title: "Transferências e Rematrículas",
      icon: "🔄",
      content: (
        <div className="content-section">
          <h3>Transferências, Trancamentos e Rematrículas</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Nova Transferência</button>
            <button className="action-btn">+ Novo Trancamento</button>
            <button className="action-btn">+ Nova Rematrícula</button>
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
    relatorios: {
      title: "Relatórios",
      icon: "📊",
      content: (
        <div className="content-section">
          <h3>Relatórios de Notas, Faltas e Ocorrências</h3>
          <div className="action-buttons">
            <button className="action-btn">Relatório de Notas</button>
            <button className="action-btn">Relatório de Faltas</button>
            <button className="action-btn">Relatório de Ocorrências</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Alunos com Notas Baixas</h4>
              <p className="stat-value">12</p>
              <p className="stat-desc">Abaixo de 6.0</p>
            </div>
            <div className="stat-card">
              <h4>Alunos com Muitas Faltas</h4>
              <p className="stat-value">8</p>
              <p className="stat-desc">Acima de 15 dias</p>
            </div>
            <div className="stat-card">
              <h4>Ocorrências Disciplinares</h4>
              <p className="stat-value">5</p>
              <p className="stat-desc">Este mês</p>
            </div>
          </div>
        </div>
      ),
    },
    documentos: {
      title: "Emissão de Documentos",
      icon: "📄",
      content: (
        <div className="content-section">
          <h3>Emissão de Documentos Escolares</h3>
          <div className="action-buttons">
            <button className="action-btn">Declaração de Matrícula</button>
            <button className="action-btn">Histórico Escolar</button>
            <button className="action-btn">Boletim</button>
            <button className="action-btn">Certificado de Conclusão</button>
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
              <option>Certificado de Conclusão</option>
            </select>
            <button className="action-btn">Gerar Documento</button>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "cadastro", label: "Cadastro de Alunos", icon: "👤" },
    { key: "transferencia", label: "Transferências", icon: "🔄" },
    { key: "relatorios", label: "Relatórios", icon: "📊" },
    { key: "documentos", label: "Documentos", icon: "📄" },
  ];

  return (
    <div className="gestao-alunos">
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
