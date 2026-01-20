import { useState } from "react";
import "../Styles/FerramentasAdministrativas.css";

interface Ocorrencia {
  id: string;
  alunoNome: string;
  tipo: "Comportamento" | "Falta" | "Observação";
  descricao: string;
  data: string;
  gravidade: "Leve" | "Média" | "Grave";
}

interface SolicitacaoRecurso {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  status: "Pendente" | "Aprovado" | "Rejeitado";
}

export default function FerramentasAdministrativas() {
  const [aba, setAba] = useState("ocorrencias");
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([
    {
      id: "1",
      alunoNome: "Pedro Santos Silva",
      tipo: "Comportamento",
      descricao: "Falta de respeito com colega durante a aula",
      data: "2024-01-15",
      gravidade: "Média",
    },
    {
      id: "2",
      alunoNome: "Maria Oliveira Costa",
      tipo: "Falta",
      descricao: "Falta não justificada",
      data: "2024-01-14",
      gravidade: "Leve",
    },
  ]);

  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoRecurso[]>([
    {
      id: "1",
      titulo: "Materiais para Aula Prática",
      descricao:
        "Solicitação de materiais de laboratório para aulas de Ciências",
      data: "2024-01-12",
      status: "Pendente",
    },
    {
      id: "2",
      titulo: "Projetor Multimídia",
      descricao: "Projetor para aulas teóricas",
      data: "2024-01-10",
      status: "Aprovado",
    },
  ]);

  const [showNovaOcorrencia, setShowNovaOcorrencia] = useState(false);
  const [novaOcorrencia, setNovaOcorrencia] = useState({
    alunoNome: "",
    tipo: "Comportamento" as const,
    descricao: "",
    gravidade: "Leve" as const,
  });

  const [showSolicitacao, setShowSolicitacao] = useState(false);
  const [novaSolicitacao, setNovaSolicitacao] = useState({
    titulo: "",
    descricao: "",
  });

  const handleAdicionarOcorrencia = (e: React.FormEvent) => {
    e.preventDefault();
    if (novaOcorrencia.alunoNome && novaOcorrencia.descricao) {
      const novoId = String(ocorrencias.length + 1);
      setOcorrencias([
        ...ocorrencias,
        {
          id: novoId,
          ...novaOcorrencia,
          data: new Date().toISOString().split("T")[0],
        },
      ]);
      setNovaOcorrencia({
        alunoNome: "",
        tipo: "Comportamento",
        descricao: "",
        gravidade: "Leve",
      });
      setShowNovaOcorrencia(false);
    }
  };

  const handleAdicionarSolicitacao = (e: React.FormEvent) => {
    e.preventDefault();
    if (novaSolicitacao.titulo) {
      const novoId = String(solicitacoes.length + 1);
      setSolicitacoes([
        ...solicitacoes,
        {
          id: novoId,
          ...novaSolicitacao,
          data: new Date().toISOString().split("T")[0],
          status: "Pendente",
        },
      ]);
      setNovaSolicitacao({ titulo: "", descricao: "" });
      setShowSolicitacao(false);
    }
  };

  const getGravidadeColor = (gravidade: string) => {
    const cores: Record<string, string> = {
      Leve: "#4CAF50",
      Média: "#FFC107",
      Grave: "#F44336",
    };
    return cores[gravidade] || "#999";
  };

  const getStatusColor = (status: string) => {
    const cores: Record<string, string> = {
      Pendente: "#FFC107",
      Aprovado: "#4CAF50",
      Rejeitado: "#F44336",
    };
    return cores[status] || "#999";
  };

  return (
    <div className="ferramentas-administrativas">
      <h2>Ferramentas Administrativas</h2>

      {/* Abas */}
      <div className="abas-container">
        <button
          className={`aba-btn ${aba === "ocorrencias" ? "active" : ""}`}
          onClick={() => setAba("ocorrencias")}
        >
          ⚠️ Ocorrências
        </button>
        <button
          className={`aba-btn ${aba === "solicitacoes" ? "active" : ""}`}
          onClick={() => setAba("solicitacoes")}
        >
          📋 Solicitações de Recursos
        </button>
        <button
          className={`aba-btn ${aba === "calendario" ? "active" : ""}`}
          onClick={() => setAba("calendario")}
        >
          📅 Calendário Escolar
        </button>
        <button
          className={`aba-btn ${aba === "relatorios" ? "active" : ""}`}
          onClick={() => setAba("relatorios")}
        >
          📊 Relatórios
        </button>
      </div>

      {/* Ocorrências */}
      {aba === "ocorrencias" && (
        <div className="ocorrencias-section">
          <div className="section-header">
            <h3>Registro de Ocorrências</h3>
            <button
              className="btn-adicionar"
              onClick={() => setShowNovaOcorrencia(!showNovaOcorrencia)}
            >
              + Nova Ocorrência
            </button>
          </div>

          {showNovaOcorrencia && (
            <div className="nova-ocorrencia-form">
              <form onSubmit={handleAdicionarOcorrencia}>
                <div className="form-group">
                  <label>Nome do Aluno</label>
                  <input
                    type="text"
                    value={novaOcorrencia.alunoNome}
                    onChange={(e) =>
                      setNovaOcorrencia({
                        ...novaOcorrencia,
                        alunoNome: e.target.value,
                      })
                    }
                    placeholder="Digite o nome do aluno"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Tipo</label>
                    <select
                      value={novaOcorrencia.tipo}
                      onChange={(e) =>
                        setNovaOcorrencia({
                          ...novaOcorrencia,
                          tipo: e.target.value as any,
                        })
                      }
                    >
                      <option value="Comportamento">Comportamento</option>
                      <option value="Falta">Falta</option>
                      <option value="Observação">Observação</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Gravidade</label>
                    <select
                      value={novaOcorrencia.gravidade}
                      onChange={(e) =>
                        setNovaOcorrencia({
                          ...novaOcorrencia,
                          gravidade: e.target.value as any,
                        })
                      }
                    >
                      <option value="Leve">Leve</option>
                      <option value="Média">Média</option>
                      <option value="Grave">Grave</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Descrição</label>
                  <textarea
                    value={novaOcorrencia.descricao}
                    onChange={(e) =>
                      setNovaOcorrencia({
                        ...novaOcorrencia,
                        descricao: e.target.value,
                      })
                    }
                    placeholder="Descreva a ocorrência"
                    rows={4}
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit" className="btn-salvar">
                    Registrar Ocorrência
                  </button>
                  <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => setShowNovaOcorrencia(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="ocorrencias-lista">
            {ocorrencias.map((ocorrencia) => (
              <div key={ocorrencia.id} className="ocorrencia-card">
                <div className="ocorrencia-header">
                  <h4>{ocorrencia.alunoNome}</h4>
                  <span
                    className="gravidade-badge"
                    style={{
                      backgroundColor: getGravidadeColor(ocorrencia.gravidade),
                    }}
                  >
                    {ocorrencia.gravidade}
                  </span>
                </div>
                <p className="ocorrencia-tipo">
                  <strong>Tipo:</strong> {ocorrencia.tipo}
                </p>
                <p className="ocorrencia-desc">{ocorrencia.descricao}</p>
                <span className="ocorrencia-data">
                  {new Date(ocorrencia.data).toLocaleDateString("pt-BR")}
                </span>
                <div className="ocorrencia-actions">
                  <button className="btn-acao">Editar</button>
                  <button className="btn-acao">Notificar Responsável</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Solicitações de Recursos */}
      {aba === "solicitacoes" && (
        <div className="solicitacoes-section">
          <div className="section-header">
            <h3>Solicitações de Recursos</h3>
            <button
              className="btn-adicionar"
              onClick={() => setShowSolicitacao(!showSolicitacao)}
            >
              + Nova Solicitação
            </button>
          </div>

          {showSolicitacao && (
            <div className="nova-solicitacao-form">
              <form onSubmit={handleAdicionarSolicitacao}>
                <div className="form-group">
                  <label>Título</label>
                  <input
                    type="text"
                    value={novaSolicitacao.titulo}
                    onChange={(e) =>
                      setNovaSolicitacao({
                        ...novaSolicitacao,
                        titulo: e.target.value,
                      })
                    }
                    placeholder="Ex: Materiais para Aula Prática"
                  />
                </div>
                <div className="form-group">
                  <label>Descrição Detalhada</label>
                  <textarea
                    value={novaSolicitacao.descricao}
                    onChange={(e) =>
                      setNovaSolicitacao({
                        ...novaSolicitacao,
                        descricao: e.target.value,
                      })
                    }
                    placeholder="Descreva o recurso solicitado"
                    rows={4}
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit" className="btn-salvar">
                    Enviar Solicitação
                  </button>
                  <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => setShowSolicitacao(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="solicitacoes-lista">
            {solicitacoes.map((solicitacao) => (
              <div key={solicitacao.id} className="solicitacao-card">
                <div className="solicitacao-header">
                  <h4>{solicitacao.titulo}</h4>
                  <span
                    className="status-badge"
                    style={{
                      backgroundColor: getStatusColor(solicitacao.status),
                    }}
                  >
                    {solicitacao.status}
                  </span>
                </div>
                <p>{solicitacao.descricao}</p>
                <span className="solicitacao-data">
                  {new Date(solicitacao.data).toLocaleDateString("pt-BR")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calendário Escolar */}
      {aba === "calendario" && (
        <div className="calendario-section">
          <h3>Calendário Escolar Oficial</h3>
          <div className="calendario-container">
            <div className="calendario-evento">
              <span className="evento-data">15 Jan</span>
              <h4>Início das Aulas</h4>
              <p>Início do semestre letivo de 2024</p>
            </div>
            <div className="calendario-evento">
              <span className="evento-data">05 Fev</span>
              <h4>Carnaval</h4>
              <p>Feriado nacional - sem aulas</p>
            </div>
            <div className="calendario-evento">
              <span className="evento-data">20 Mar</span>
              <h4>Semana de Provas</h4>
              <p>Período de avaliações do 1º bimestre</p>
            </div>
            <div className="calendario-evento">
              <span className="evento-data">10 Apr</span>
              <h4>Páscoa</h4>
              <p>Feriado prolongado</p>
            </div>
            <div className="calendario-evento">
              <span className="evento-data">01 May</span>
              <h4>Dia do Trabalho</h4>
              <p>Feriado nacional</p>
            </div>
            <div className="calendario-evento">
              <span className="evento-data">30 Jun</span>
              <h4>Fim do 1º Semestre</h4>
              <p>Recesso escolar</p>
            </div>
          </div>
        </div>
      )}

      {/* Relatórios */}
      {aba === "relatorios" && (
        <div className="relatorios-section">
          <h3>Relatórios para Coordenação</h3>
          <div className="relatorios-container">
            <div className="relatorio-card">
              <h4>Relatório de Frequência</h4>
              <p>
                Gera relatório completo de frequência por aluno e turma para o
                período.
              </p>
              <button className="btn-exportar">📥 Exportar Frequência</button>
            </div>
            <div className="relatorio-card">
              <h4>Relatório de Notas</h4>
              <p>
                Exporta todas as notas, médias e status de aprovação dos alunos.
              </p>
              <button className="btn-exportar">📥 Exportar Notas</button>
            </div>
            <div className="relatorio-card">
              <h4>Relatório de Ocorrências</h4>
              <p>Consolidado de todas as ocorrências registradas no período.</p>
              <button className="btn-exportar">📥 Exportar Ocorrências</button>
            </div>
            <div className="relatorio-card">
              <h4>Relatório de Desempenho</h4>
              <p>
                Análise detalhada do desempenho individual e coletivo da turma.
              </p>
              <button className="btn-exportar">📥 Exportar Desempenho</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
