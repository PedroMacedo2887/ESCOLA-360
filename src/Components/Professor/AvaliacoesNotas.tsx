import { useState } from "react";
import "../Styles/AvaliacoesNotas.css";

interface Avaliacao {
  id: string;
  titulo: string;
  disciplina: string;
  data: string;
  tipo: "Prova" | "Trabalho" | "Questionário" | "Teste";
}

interface Nota {
  alunoId: string;
  alunoNome: string;
  avaliacao: string;
  nota: number;
  data: string;
}

export default function AvaliacoesNotas() {
  const [aba, setAba] = useState("avaliacoes");
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([
    {
      id: "1",
      titulo: "Equações do 2º Grau",
      disciplina: "Matemática",
      data: "2024-01-15",
      tipo: "Prova",
    },
    {
      id: "2",
      titulo: "Geometria Plana",
      disciplina: "Matemática",
      data: "2024-01-20",
      tipo: "Questionário",
    },
  ]);

  const [notas, setNotas] = useState<Nota[]>([
    {
      alunoId: "1",
      alunoNome: "João Silva Santos",
      avaliacao: "Equações do 2º Grau",
      nota: 8.5,
      data: "2024-01-15",
    },
    {
      alunoId: "2",
      alunoNome: "Maria Oliveira Costa",
      avaliacao: "Equações do 2º Grau",
      nota: 7.8,
      data: "2024-01-15",
    },
    {
      alunoId: "3",
      alunoNome: "Pedro Santos Silva",
      avaliacao: "Equações do 2º Grau",
      nota: 8.2,
      data: "2024-01-15",
    },
  ]);

  const [showNovaAvaliacao, setShowNovaAvaliacao] = useState(false);
  const [novaAvaliacao, setNovaAvaliacao] = useState({
    titulo: "",
    disciplina: "Matemática",
    data: "",
    tipo: "Prova" as const,
  });

  const [showLancamentoNotas, setShowLancamentoNotas] = useState(false);
  const [notasParaLancar, setNotasParaLancar] = useState({
    alunoId: "",
    avaliacao: "",
    nota: "",
  });

  const handleAdicionarAvaliacao = (e: React.FormEvent) => {
    e.preventDefault();
    if (novaAvaliacao.titulo && novaAvaliacao.data) {
      const novoId = String(avaliacoes.length + 1);
      setAvaliacoes([
        ...avaliacoes,
        {
          id: novoId,
          ...novaAvaliacao,
        },
      ]);
      setNovaAvaliacao({
        titulo: "",
        disciplina: "Matemática",
        data: "",
        tipo: "Prova",
      });
      setShowNovaAvaliacao(false);
    }
  };

  const handleLancarNota = (e: React.FormEvent) => {
    e.preventDefault();
    if (notasParaLancar.alunoId && notasParaLancar.nota) {
      setNotas([
        ...notas,
        {
          alunoId: notasParaLancar.alunoId,
          alunoNome: `Aluno ${notasParaLancar.alunoId}`,
          avaliacao: notasParaLancar.avaliacao,
          nota: parseFloat(notasParaLancar.nota),
          data: new Date().toISOString().split("T")[0],
        },
      ]);
      setNotasParaLancar({ alunoId: "", avaliacao: "", nota: "" });
      setShowLancamentoNotas(false);
    }
  };

  const getTipoColor = (tipo: string) => {
    const cores: Record<string, string> = {
      Prova: "#FF6B6B",
      Trabalho: "#4ECDC4",
      Questionário: "#45B7D1",
      Teste: "#96CEB4",
    };
    return cores[tipo] || "#999";
  };

  const getTipoIcon = (tipo: string) => {
    const icons: Record<string, string> = {
      Prova: "📝",
      Trabalho: "📚",
      Questionário: "❓",
      Teste: "✅",
    };
    return icons[tipo] || "📋";
  };

  const getNotaColor = (nota: number) => {
    if (nota >= 7) return "#4CAF50";
    if (nota >= 5) return "#FFC107";
    return "#F44336";
  };

  const calcularMediaAluno = (alunoId: string) => {
    const notasAluno = notas.filter((n) => n.alunoId === alunoId);
    if (notasAluno.length === 0) return 0;
    return notasAluno.reduce((sum, n) => sum + n.nota, 0) / notasAluno.length;
  };

  return (
    <div className="avaliacoes-notas">
      <h2>Avaliações e Notas</h2>

      {/* Abas */}
      <div className="abas-container">
        <button
          className={`aba-btn ${aba === "avaliacoes" ? "active" : ""}`}
          onClick={() => setAba("avaliacoes")}
        >
          📋 Avaliações
        </button>
        <button
          className={`aba-btn ${aba === "notas" ? "active" : ""}`}
          onClick={() => setAba("notas")}
        >
          📊 Lançamento de Notas
        </button>
        <button
          className={`aba-btn ${aba === "relatorios" ? "active" : ""}`}
          onClick={() => setAba("relatorios")}
        >
          📈 Relatórios
        </button>
      </div>

      {/* Avaliações */}
      {aba === "avaliacoes" && (
        <div className="avaliacoes-section">
          <div className="section-header">
            <h3>Avaliações e Testes Online</h3>
            <button
              className="btn-adicionar"
              onClick={() => setShowNovaAvaliacao(!showNovaAvaliacao)}
            >
              + Nova Avaliação
            </button>
          </div>

          {showNovaAvaliacao && (
            <div className="nova-avaliacao-form">
              <form onSubmit={handleAdicionarAvaliacao}>
                <div className="form-group">
                  <label>Título da Avaliação</label>
                  <input
                    type="text"
                    value={novaAvaliacao.titulo}
                    onChange={(e) =>
                      setNovaAvaliacao({
                        ...novaAvaliacao,
                        titulo: e.target.value,
                      })
                    }
                    placeholder="Ex: Prova de Equações"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Tipo</label>
                    <select
                      value={novaAvaliacao.tipo}
                      onChange={(e) =>
                        setNovaAvaliacao({
                          ...novaAvaliacao,
                          tipo: e.target.value as any,
                        })
                      }
                    >
                      <option value="Prova">Prova</option>
                      <option value="Trabalho">Trabalho</option>
                      <option value="Questionário">Questionário</option>
                      <option value="Teste">Teste</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Data</label>
                    <input
                      type="date"
                      value={novaAvaliacao.data}
                      onChange={(e) =>
                        setNovaAvaliacao({
                          ...novaAvaliacao,
                          data: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-buttons">
                  <button type="submit" className="btn-salvar">
                    Criar Avaliação
                  </button>
                  <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => setShowNovaAvaliacao(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="avaliacoes-grid">
            {avaliacoes.map((avaliacao) => (
              <div key={avaliacao.id} className="avaliacao-card">
                <div className="avaliacao-header">
                  <span className="avaliacao-icon">
                    {getTipoIcon(avaliacao.tipo)}
                  </span>
                  <span
                    className="tipo-badge"
                    style={{ backgroundColor: getTipoColor(avaliacao.tipo) }}
                  >
                    {avaliacao.tipo}
                  </span>
                </div>
                <h4>{avaliacao.titulo}</h4>
                <p className="avaliacao-info">
                  <strong>Disciplina:</strong> {avaliacao.disciplina}
                </p>
                <p className="avaliacao-info">
                  <strong>Data:</strong>{" "}
                  {new Date(avaliacao.data).toLocaleDateString("pt-BR")}
                </p>
                <div className="avaliacao-actions">
                  <button className="btn-acao">Editar</button>
                  <button className="btn-acao">Ver Respostas</button>
                  <button className="btn-acao">Deletar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lançamento de Notas */}
      {aba === "notas" && (
        <div className="notas-section">
          <div className="section-header">
            <h3>Lançamento de Notas</h3>
            <button
              className="btn-adicionar"
              onClick={() => setShowLancamentoNotas(!showLancamentoNotas)}
            >
              + Lançar Nota
            </button>
          </div>

          {showLancamentoNotas && (
            <div className="lancamento-notas-form">
              <form onSubmit={handleLancarNota}>
                <div className="form-group">
                  <label>Aluno</label>
                  <select
                    value={notasParaLancar.alunoId}
                    onChange={(e) =>
                      setNotasParaLancar({
                        ...notasParaLancar,
                        alunoId: e.target.value,
                      })
                    }
                  >
                    <option value="">Selecione um aluno</option>
                    <option value="1">João Silva Santos</option>
                    <option value="2">Maria Oliveira Costa</option>
                    <option value="3">Pedro Santos Silva</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Avaliação</label>
                  <select
                    value={notasParaLancar.avaliacao}
                    onChange={(e) =>
                      setNotasParaLancar({
                        ...notasParaLancar,
                        avaliacao: e.target.value,
                      })
                    }
                  >
                    <option value="">Selecione uma avaliação</option>
                    {avaliacoes.map((av) => (
                      <option key={av.id} value={av.titulo}>
                        {av.titulo}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Nota (0-10)</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={notasParaLancar.nota}
                    onChange={(e) =>
                      setNotasParaLancar({
                        ...notasParaLancar,
                        nota: e.target.value,
                      })
                    }
                    placeholder="Ex: 8.5"
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit" className="btn-salvar">
                    Lançar Nota
                  </button>
                  <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => setShowLancamentoNotas(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="notas-tabela">
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Avaliação</th>
                  <th>Nota</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {notas.map((nota) => (
                  <tr key={`${nota.alunoId}-${nota.avaliacao}`}>
                    <td className="aluno-nome">{nota.alunoNome}</td>
                    <td>{nota.avaliacao}</td>
                    <td>
                      <span
                        className="nota-badge"
                        style={{
                          backgroundColor: getNotaColor(nota.nota),
                        }}
                      >
                        {nota.nota.toFixed(1)}
                      </span>
                    </td>
                    <td>{new Date(nota.data).toLocaleDateString("pt-BR")}</td>
                    <td>
                      <button className="btn-acao">Editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Relatórios */}
      {aba === "relatorios" && (
        <div className="relatorios-section">
          <h3>Relatórios de Desempenho</h3>
          <div className="relatorios-container">
            <div className="relatorio-aluno">
              <h4>Desempenho por Aluno</h4>
              <table className="relatorio-table">
                <thead>
                  <tr>
                    <th>Aluno</th>
                    <th>Média</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {["1", "2", "3"].map((id) => {
                    const media = calcularMediaAluno(id);
                    return (
                      <tr key={id}>
                        <td>Aluno {id}</td>
                        <td className="media-valor">{media.toFixed(2)}</td>
                        <td>
                          <span
                            className="status-badge"
                            style={{
                              backgroundColor: getNotaColor(media),
                            }}
                          >
                            {media >= 7 ? "Aprovado" : "Recuperação"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button className="btn-exportar">📥 Exportar Boletim</button>
            </div>

            <div className="relatorio-turma">
              <h4>Resumo da Turma</h4>
              <div className="resumo-stats">
                <div className="stat-card">
                  <span className="stat-label">Média Geral</span>
                  <span className="stat-valor">
                    {(
                      notas.reduce((sum, n) => sum + n.nota, 0) / notas.length
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Alunos Aprovados</span>
                  <span className="stat-valor">
                    {notas.filter((n) => n.nota >= 7).length}
                  </span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Em Recuperação</span>
                  <span className="stat-valor">
                    {notas.filter((n) => n.nota < 7 && n.nota >= 5).length}
                  </span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Reprovados</span>
                  <span className="stat-valor">
                    {notas.filter((n) => n.nota < 5).length}
                  </span>
                </div>
              </div>
              <button className="btn-exportar">
                📥 Exportar Relatório da Turma
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
