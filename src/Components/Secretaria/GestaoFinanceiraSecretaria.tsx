import "../Styles/GestaoFinanceiraSecretaria.css";
import { useState } from "react";

export default function GestaoFinanceiraSecretaria() {
  const [activeSubMenu, setActiveSubMenu] = useState("mensalidades");

  const subMenus = {
    mensalidades: {
      title: "Controle de Mensalidades",
      content: (
        <div className="content-section">
          <h3>Controle de Mensalidades e Taxas Escolares</h3>
          <div className="action-buttons">
            <button className="action-btn">+ Registrar Pagamento</button>
            <button className="action-btn secondary">Filtrar por Aluno</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Mês</th>
                  <th>Valor</th>
                  <th>Data Vencimento</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maria Santos</td>
                  <td>Janeiro 2025</td>
                  <td>R$ 500,00</td>
                  <td>10/01/2025</td>
                  <td>
                    <span className="status-badge success">Pago</span>
                  </td>
                  <td>
                    <button className="action-icon">👁️</button>
                  </td>
                </tr>
                <tr>
                  <td>João Costa</td>
                  <td>Janeiro 2025</td>
                  <td>R$ 500,00</td>
                  <td>10/01/2025</td>
                  <td>
                    <span className="status-badge danger">Atrasado</span>
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
    boletos: {
      title: "Emissão de Boletos",
      content: (
        <div className="content-section">
          <h3>Emissão de Boletos e Comprovantes de Pagamento</h3>
          <div className="action-buttons">
            <button className="action-btn">Gerar Boleto</button>
            <button className="action-btn">Gerar Comprovante</button>
            <button className="action-btn secondary">Boletos Emitidos</button>
          </div>
          <div className="boletos-form">
            <label>Selecione o Aluno</label>
            <select className="form-select">
              <option>-- Selecione --</option>
              <option>Maria Santos</option>
              <option>João Costa</option>
              <option>Ana Silva</option>
            </select>
            <label>Referência (Mês/Ano)</label>
            <input type="month" className="form-input" />
            <label>Valor</label>
            <input type="number" placeholder="0,00" className="form-input" />
            <button className="action-btn">Gerar Boleto</button>
          </div>
        </div>
      ),
    },
    inadimplencia: {
      title: "Relatórios de Inadimplência",
      content: (
        <div className="content-section">
          <h3>Relatórios de Inadimplência</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">
              Filtrar por Período
            </button>
            <button className="action-btn secondary">Gerar Relatório</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total em Atraso</h4>
              <p className="stat-value">R$ 25.000</p>
              <p className="stat-desc">10 alunos</p>
            </div>
            <div className="stat-card">
              <h4>Alunos Inadimplentes</h4>
              <p className="stat-value">10</p>
              <p className="stat-desc">2% do total</p>
            </div>
            <div className="stat-card">
              <h4>Média de Atraso</h4>
              <p className="stat-value">R$ 2.500</p>
              <p className="stat-desc">Por aluno</p>
            </div>
          </div>
          <div className="table-container" style={{ marginTop: "20px" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Valor em Atraso</th>
                  <th>Meses</th>
                  <th>Data 1º Atraso</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>João Costa</td>
                  <td>R$ 1.500,00</td>
                  <td>3</td>
                  <td>15/10/2024</td>
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
    { key: "mensalidades", label: "Mensalidades", icon: "💳" },
    { key: "boletos", label: "Boletos", icon: "📄" },
    { key: "inadimplencia", label: "Inadimplência", icon: "⚠️" },
  ];

  return (
    <div className="gestao-financeira-secretaria">
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
