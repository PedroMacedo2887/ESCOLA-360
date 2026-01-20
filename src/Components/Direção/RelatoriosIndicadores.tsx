import "../Styles/RelatoriosIndicadores.css";
import { useState } from "react";

export default function RelatoriosIndicadores() {
  const [activeSubMenu, setActiveSubMenu] = useState("painel");

  const subMenus = {
    painel: {
      title: "Painel de Indicadores",
      icon: "📊",
      content: (
        <div className="content-section">
          <h3>Painel de Indicadores de Desempenho Escolar</h3>
          <div className="action-buttons">
            <button className="action-btn secondary">
              Filtrar por Período
            </button>
            <button className="action-btn secondary">Atualizar Dados</button>
            <button className="action-btn secondary">Exportar</button>
          </div>
          <div className="indicadores-grid">
            <div className="indicador-card">
              <h4>Nota Média Geral</h4>
              <p className="indicador-value">7.8</p>
              <div className="indicador-bar">
                <div className="bar-fill" style={{ width: "78%" }}></div>
              </div>
              <p className="indicador-desc">De todas as turmas</p>
            </div>
            <div className="indicador-card">
              <h4>Taxa de Frequência</h4>
              <p className="indicador-value">92%</p>
              <div className="indicador-bar">
                <div className="bar-fill" style={{ width: "92%" }}></div>
              </div>
              <p className="indicador-desc">Média de presença</p>
            </div>
            <div className="indicador-card">
              <h4>Taxa de Evasão</h4>
              <p className="indicador-value">2%</p>
              <div className="indicador-bar warning">
                <div className="bar-fill" style={{ width: "2%" }}></div>
              </div>
              <p className="indicador-desc">Alunos evadidos</p>
            </div>
            <div className="indicador-card">
              <h4>Aprovação</h4>
              <p className="indicador-value">95%</p>
              <div className="indicador-bar">
                <div className="bar-fill" style={{ width: "95%" }}></div>
              </div>
              <p className="indicador-desc">Taxa geral</p>
            </div>
          </div>
          <div className="chart-section">
            <h4>Evolução Mensal das Notas</h4>
            <div className="simple-chart">
              <div className="chart-bar">
                <div className="bar" style={{ height: "70%" }}></div>
                <p>Jan</p>
              </div>
              <div className="chart-bar">
                <div className="bar" style={{ height: "75%" }}></div>
                <p>Fev</p>
              </div>
              <div className="chart-bar">
                <div className="bar" style={{ height: "78%" }}></div>
                <p>Mar</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    personalizados: {
      title: "Relatórios Personalizados",
      icon: "📄",
      content: (
        <div className="content-section">
          <h3>Relatórios Personalizados</h3>
          <div className="action-buttons">
            <button className="action-btn">Gerar Novo Relatório</button>
            <button className="action-btn secondary">Meus Relatórios</button>
            <button className="action-btn secondary">Relatórios Salvos</button>
          </div>
          <div className="relatorio-form">
            <label>Tipo de Relatório</label>
            <select className="form-select">
              <option>-- Selecione --</option>
              <option>Por Período</option>
              <option>Por Turma</option>
              <option>Por Disciplina</option>
              <option>Comparativo Entre Turmas</option>
              <option>Desempenho Individual de Aluno</option>
            </select>
            <label>Período</label>
            <input type="date" className="form-input" />
            <label>Até</label>
            <input type="date" className="form-input" />
            <label>Filtros Adicionais (Opcional)</label>
            <input
              type="text"
              placeholder="Digite filtros adicionais"
              className="form-input"
            />
            <button className="action-btn">Gerar Relatório</button>
          </div>
          <div className="relatorios-list">
            <h4>Relatórios Recentes</h4>
            <div className="relatorio-item">
              <p>Relatório de Desempenho - 6º Ano A (Janeiro 2025)</p>
              <button className="action-icon">📥</button>
            </div>
            <div className="relatorio-item">
              <p>Comparativo de Notas - Todas as Turmas</p>
              <button className="action-icon">📥</button>
            </div>
          </div>
        </div>
      ),
    },
    exportacao: {
      title: "Exportação de Dados",
      icon: "💾",
      content: (
        <div className="content-section">
          <h3>Exportação de Dados para Análise Externa</h3>
          <div className="action-buttons">
            <button className="action-btn">Exportar em Excel</button>
            <button className="action-btn">Exportar em PDF</button>
            <button className="action-btn">Exportar em CSV</button>
            <button className="action-btn secondary">
              Agendamento de Exportações
            </button>
          </div>
          <div className="exportacao-form">
            <label>Selecione os Dados para Exportar</label>
            <div className="export-checkboxes">
              <label>
                <input type="checkbox" defaultChecked /> Notas de Alunos
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Frequência
              </label>
              <label>
                <input type="checkbox" /> Dados de Professores
              </label>
              <label>
                <input type="checkbox" /> Informações de Turmas
              </label>
              <label>
                <input type="checkbox" /> Dados Financeiros
              </label>
              <label>
                <input type="checkbox" /> Relatório de Desempenho
              </label>
            </div>
            <label>Período</label>
            <input type="date" className="form-input" />
            <label>Até</label>
            <input type="date" className="form-input" />
            <label>Formato</label>
            <select className="form-select">
              <option>Excel (.xlsx)</option>
              <option>PDF (.pdf)</option>
              <option>CSV (.csv)</option>
              <option>JSON (.json)</option>
            </select>
            <button className="action-btn">Preparar Exportação</button>
          </div>
        </div>
      ),
    },
  };

  const subMenuItems = [
    { key: "painel", label: "Painel de Indicadores", icon: "📊" },
    { key: "personalizados", label: "Relatórios Personalizados", icon: "📄" },
    { key: "exportacao", label: "Exportação de Dados", icon: "💾" },
  ];

  return (
    <div className="relatorios-indicadores">
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
