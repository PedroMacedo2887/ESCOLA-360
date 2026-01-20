import "../Styles/RelatoriosArquivosSecretaria.css";
import { useState } from "react";

export default function RelatoriosArquivosSecretaria() {
  const [activeSubMenu, setActiveSubMenu] = useState("relatorios");

  const subMenus = {
    relatorios: {
      title: "Relatórios Administrativos",
      content: (
        <div className="content-section">
          <h3>Geração de Relatórios Administrativos</h3>
          <div className="action-buttons">
            <button className="action-btn">Matrículas Ativas</button>
            <button className="action-btn">Evasão Escolar</button>
            <button className="action-btn">Transferências</button>
            <button className="action-btn secondary">Personalizado</button>
          </div>
          <div className="relatorio-form">
            <label>Tipo de Relatório</label>
            <select className="form-select">
              <option>Matrículas Ativas</option>
              <option>Taxa de Evasão</option>
              <option>Transferências</option>
              <option>Rematrículas</option>
              <option>Estatísticas Gerais</option>
            </select>
            <label>Período</label>
            <input type="date" className="form-input" />
            <button className="action-btn">Gerar Relatório</button>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total de Alunos</h4>
              <p className="stat-value">500</p>
              <p className="stat-desc">Todos os anos</p>
            </div>
            <div className="stat-card">
              <h4>Taxa de Evasão</h4>
              <p className="stat-value">2%</p>
              <p className="stat-desc">Últimos 30 dias</p>
            </div>
            <div className="stat-card">
              <h4>Transferências</h4>
              <p className="stat-value">5</p>
              <p className="stat-desc">Este mês</p>
            </div>
          </div>
        </div>
      ),
    },
    arquivo: {
      title: "Arquivo Digital",
      content: (
        <div className="content-section">
          <h3>Arquivo Digital de Documentos Emitidos</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">Buscar Documento</button>
            <button className="action-btn secondary">Filtrar por Data</button>
            <button className="action-btn secondary">Filtrar por Aluno</button>
          </div>
          <div className="search-form">
            <input
              type="text"
              placeholder="Buscar por aluno, matrícula ou protocolo"
              className="form-input"
            />
            <button className="action-btn">Pesquisar</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Tipo de Documento</th>
                  <th>Aluno</th>
                  <th>Solicitante</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10/01/2025</td>
                  <td>Declaração de Matrícula</td>
                  <td>Maria Santos</td>
                  <td>Ana Silva</td>
                  <td>
                    <span className="status-badge success">Emitido</span>
                  </td>
                  <td>
                    <button className="action-icon">📥</button>
                    <button className="action-icon">👁️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    exportacao: {
      title: "Exportação de Dados",
      content: (
        <div className="content-section">
          <h3>Exportação de Dados para Órgãos Oficiais</h3>
          <div className="action-buttons">
            <button className="action-btn">
              Exportar para Secretaria de Educação
            </button>
            <button className="action-btn">Exportar para MEC</button>
            <button className="action-btn secondary">
              Histórico de Exportações
            </button>
          </div>
          <div className="exportacao-form">
            <label>Tipo de Dados para Exportar</label>
            <div className="export-checkboxes">
              <label>
                <input type="checkbox" defaultChecked /> Dados de Alunos
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Dados de Profissionais
              </label>
              <label>
                <input type="checkbox" /> Dados Acadêmicos
              </label>
              <label>
                <input type="checkbox" /> Dados Financeiros
              </label>
              <label>
                <input type="checkbox" /> Frequência
              </label>
            </div>
            <label>Período</label>
            <input type="date" className="form-input" />
            <label>Formato</label>
            <select className="form-select">
              <option>Excel (.xlsx)</option>
              <option>CSV (.csv)</option>
              <option>PDF (.pdf)</option>
              <option>XML (.xml)</option>
            </select>
            <button className="action-btn">Preparar Exportação</button>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "relatorios", label: "Relatórios", icon: "📊" },
    { key: "arquivo", label: "Arquivo Digital", icon: "📁" },
    { key: "exportacao", label: "Exportação", icon: "💾" },
  ];

  return (
    <div className="relatorios-arquivos-secretaria">
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
